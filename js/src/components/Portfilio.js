import React from "react";

export default function Portfolio({
  title,
  src,
  category,
  description,
  url,
 
}) {
    return (
        <article>
        
       
        <div className="categorie" category={category}>
            {/* <title>{title}</title> */}
            <div className="picture__text">
              <p>{title}</p>
              <p className="hoverable__tooltip">{description}</p>
              {/* <span className="hoverable__tooltip">{discription}</span> */}
            </div>
            <div className="image-grid">
              <a href={url}>
                {" "}
                <img
                  className="picture"
                  src={src}
                  width=" 400"
                  height="400"
                  alt={title}
                />{" "}
              </a>
            </div>
          </div>
        </article>
      );
}
