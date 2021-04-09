import { useState } from "react";
import { categories } from "../fotos/";

export default function FilterForm({

  selectedCategory,
  setSelectedCategory,
  keyword,
  setKeyword,
}) {
  return (
    <div  >
    {/* <div className="filter"> */}
    <form className="filter" >
    {/* <form className="filter__search"> */}
      {/* //Suchfilter */}
      <div className="filter__suche">
      <div >
        <label htmlFor="keyword"></label>
      </div>
      <input
      
        type="search"
        id="keyword"
        placeholder="Suchbegriff"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
  {/* Suchfeld Button */}
    {/* <button
        onClick={ ()=>setKeyword("")}
        arian-label="Suchbegriff löschen"
        type="button"
      >
        &times;
      </button> */}
      </div>
      {/* ######################## */}


      {/* //Kategorien */}
      <div  >
      {/* <div className="filter__category"> */}
      <div>
        <label  htmlFor="category"></label>
        </div>
        <select className="filter__kategorie"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
        >
          {/* Alle Kategorien mit map() */}
          <option value="0">Kategorie</option>
          {categories.map(({ categoryId, name }) => (
            <option key={categoryId} value={categoryId} className="filter__kategorie__op">
              {name}
            </option>
          ))}
        </select>
      </div>
    </form>
    </div>
  );
}
