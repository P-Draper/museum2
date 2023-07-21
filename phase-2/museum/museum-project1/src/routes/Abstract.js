import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Abstract(){
    // const [art, setArt] = useState(useLoaderData())
    const [art, setArt] = useOutletContext()

    const abstractArt = art.slice(50,59)

    return (
        <div>
          {abstractArt.map((artwork, index) => (
            <div key={index}>
              <h2>{artwork.title}</h2>
              <h3>{artwork.artist}</h3>
              <img width='600' height='600' src={artwork.image} alt={artwork.title} />
              <hr></hr>
            </div>
          ))}
          <hr></hr>
        </div>
      )
}