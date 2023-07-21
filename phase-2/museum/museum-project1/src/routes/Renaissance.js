import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Renaissance(){
    const [art, setArt] = useOutletContext()

    const renArt = art.slice(10,20)

    return (
        <div>
          {renArt.map((artwork, index) => (
            <div key={index}>
              <h2>{artwork.title}</h2>
              <h3>{artwork.artist}</h3>
              <div class='pContainer'>
              <p className="paragraph">{artwork.year}</p><p className="paragraph">{artwork.medium}</p>
              </div>
              <img width='600' height='600' src={artwork.image} alt={artwork.title} />
            </div>
          ))}
        </div>
      )
}