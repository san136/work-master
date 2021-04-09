import { useState, useEffect } from "react";

import Portfolio from "./Portfilio";
// mappen der fotos
import {fotos} from "../fotos"
// import Layout from './Layout'


  export default function PortfolioList({fotos, imagesArray,imageSource }) {
  console.log(imageSource);
  console.log(imagesArray);
  console.log("imagesArray");
  return (
    <section className="image-grid">
       
        {fotos.map( (foto)=> (
             < Portfolio key={foto.id} src={foto.src} {...foto} 
            
             />
          ))}
    </section>
  );
}

// export default function PortfolioList({allImages}) {
// console.log("hilfe");
// console.log(imagesArray);
//   return (
//     <section className="image-grid">
//       {allImages.forEach( (bild)=> console.log(bild))
//       }
      
//         {/* {imagesArray.map( (wpFoto)=> (
         
//              < Portfolio key={wpFoto.id} 
            
//              />
//           ))} */}
//     </section>
//   );
// }
