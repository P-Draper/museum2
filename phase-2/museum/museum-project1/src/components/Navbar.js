import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav({art}) {
    const [anything1, setAnything1] = useState(true)
    const [anything2, setAnything2] = useState(true)
    const [anything3, setAnything3] = useState(true)
    const [anything4, setAnything4] = useState(true)
    const [anything5, setAnything5] = useState(true)
    const [anything6, setAnything6] = useState(true)

    function toggle1(){
        setAnything1(taha1 => !taha1)
    }
    function toggle2(){
        setAnything2(taha2 => !taha2)
    }
    function toggle3(){
        setAnything3(taha3 => !taha3)
    }
    function toggle4(){
        setAnything4(taha4 => !taha4)
    }
    function toggle5(){
        setAnything5(taha5 => !taha5)
    }
    function toggle6(){
        setAnything6(taha6 => !taha6)
    }

    console.log(art[0].image)

    return (
        <nav className="flex justify-between">
            <div className="artNav">
                { anything1 ? <img src={art[0].image} width="150" height="150" onMouseOver={toggle1}></img> :
                <NavLink to="Cubism"
                            onMouseLeave={toggle1} className='navtext'>
                    CUBISM
                </NavLink>}
                { anything2 ? <img src={art[36].image} width="150" height="150" onMouseOver={toggle2}></img> :
                <NavLink to="Expressionism"
                            onMouseLeave={toggle2} className='navtext'>
                    EXPRESSIONISM
                </NavLink>}
                { anything3 ? <img src={art[55].image} width="150" height="150" onMouseOver={toggle3}></img> :
                <NavLink to="Abstract" 
                            onMouseLeave={toggle3} className='navtext'>
                    ABSTRACT
                </NavLink>}
                { anything4 ? <img src={art[41].image} width="150" height="150" onMouseOver={toggle4}></img> :
                <NavLink to="Futurism"
                            onMouseLeave={toggle4} className='navtext'>
                    FUTURISM
                </NavLink>}
                { anything5 ? <img src={art[22].image} width="150" height="150" onMouseOver={toggle5}></img> :
                <NavLink to="Impressionism"
                            onMouseLeave={toggle5} className='navtext'>
                    IMPRESSIONISM
                </NavLink>}
                { anything6 ? <img src={art[12].image} width="150" height="150" onMouseOver={toggle6}></img> :
                <NavLink to="Renaissance"
                            onMouseLeave={toggle6} className='navtext'>
                    RENAISSANCE
                </NavLink>}
            </div>
        </nav>
    )
}

