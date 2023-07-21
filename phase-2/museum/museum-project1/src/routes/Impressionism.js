import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Impressionism(){

    const [art, setArt] = useOutletContext()

    const impArt = art.slice(20,30)

    return (
        <div>
          {impArt.map((artwork, index) => (
            <div key={index}>
              <h2>{artwork.title}</h2>
              <h3>{artwork.artist}</h3>
              <img width='600' height='600' src={artwork.image} alt={artwork.title} />
            </div>
          ))}
        </div>
      )
}