
import { useEffect, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from "./components/Navbar";

export default function App(){

    const [artMovements, setArtMovements] = useState(useLoaderData())

    return(
        <div>
            <Navbar art={artMovements}/>
            <hr></hr>
            <Outlet context={[artMovements, setArtMovements]}/>
        </div>
    )
}
