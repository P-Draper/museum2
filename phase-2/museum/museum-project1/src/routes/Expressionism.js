import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Expressionism(){
    const [art, setArt] = useOutletContext()

    const expArray = art.slice(30,40)

    return (
        <div>
          {expArray.map((artwork, index) => (
            <div key={index}>
              <h2>{artwork.title}</h2>
              <h3>{artwork.artist}</h3>
              <p></p><p></p>
              <img width='600' height='600' src={artwork.image} alt={artwork.title} />
            </div>
          ))}
        </div>
      )
}