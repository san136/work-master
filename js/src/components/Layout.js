import React from "react";
import { useState, useEffect } from "react";
import PortfolioList from "./PortfolioList";
import FilterForm from "./FilterForm";
import fotos, { categories } from "../fotos";
// #######################################################
// #########################################################
const apiPath = "http://sandra-wildeboer.de/wp-json/wp/v2/media/";
const graphqlPath = "http://sandra-wildeboer.de/graphql";

const picId = 1234;
const pictureId = [
  1234,
  1231,
  1233,
  1226,
  1215,
  1190,
  1146,
  1145,
  1144,
  1143,
  1128,
  946,
  795,
  806,
  668,
  594,
  593,
  243,
  241,
  234,
];



export default function Filter() {
  //Kategorie
  const [selectedCategory, setSelectedCategory] = useState(0);
  //Suchfunktion Keywords
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  //bilder fetch
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const query = `
      {
        mediaItems(where: {in: [1288, 1128, 1289, 1278,1280, 1275, 668, 594, 593, 243, 241, 234, 1276, 1278, 1282, 1234, 1144]}) {
          nodes {
            altText
            guid
            slug
            title
            srcSet
            databaseId
          }
        }
      }
      `;
      try {
        const response = await fetch(`${graphqlPath}?query=${query}`);
        const data = await response.json();

        const imageSources = data.data.mediaItems.nodes;
        const imagesArray = imageSources.map((imageSource) => {

          const imageMeta = fotos.find((meta) => meta.id === imageSource.databaseId);
          if (!imageMeta) {
            return null;
          }
          return { ...imageMeta, ...imageSource}
        }).filter( (image)=> image!==null);

        setAllImages(imagesArray);
        return allImages
     
console.log(allImages);

     
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);
// console.log(imagesArray);

  //Kategorie stehen lassen nach Relaod
 
  useEffect(() => {
    const url = new URL(window.location.href);

    const oldKeyword = url.searchParams.get("keyword");
    if (oldKeyword) {
      setKeyword(oldKeyword);
    }

    const oldCategory = url.searchParams.get("category");
    if (oldCategory) {
      setSelectedCategory(parseInt(oldCategory));
    }

    setLoading(false);
  }, []);






  //Kategorie in URL
  useEffect(() => {
    const url = new URL(window.location.href);

    url.searchParams.delete("keyword");
    // Falls keyword nicht leer ist, füge den Keyword-Parameter hinzu
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    }

    url.searchParams.delete("category");
    if (selectedCategory) {
      url.searchParams.set("category", selectedCategory);
    }


    window.history.replaceState({}, "", url);
  }, [keyword, selectedCategory]);

  //Filterfukntion
  const filteredPictures = getfilteredPictures(
    fotos,
    selectedCategory,
    keyword,
   
  );
  return (
    <div>
      {/* <FilterForm /> */}
      <FilterForm
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {/* <PortfolioList imagesArray={filteredPictures} /> */}
      <PortfolioList fotos={filteredPictures} allImages={allImages} />
      {/* <PortfolioList fotos={filteredPictures} imagesArray={imagesArray}/> */}
    </div>
  );
}

function getfilteredPictures(
  fotos,
  selectedCategory,
  keyword
) {
  //Filter Kategorie
  const noCategoryFilter = selectedCategory === 0;
  // Keyword
  const noKeyword = keyword.length < 2;
  const keywordRegExp = new RegExp(keyword, "i");

  const filteredPictures = fotos
   
    .filter((foto) => noCategoryFilter || selectedCategory === foto.category)
    .filter((foto) => noKeyword || keywordRegExp.test(foto.keywords));

  return filteredPictures;
}

