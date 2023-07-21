import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Futurism(){
    const [art, setArt] = useOutletContext()

    const futuristArt = art.slice(40,50)

    return (
        <div>
          {futuristArt.map((artwork, index) => (
            <div key={index}>
              <h2>{artwork.title}</h2>
              <h3>{artwork.artist}</h3>
              <img width='600' height='600' src={artwork.image} alt={artwork.title} />
            </div>
          ))}
        </div>
      )
}