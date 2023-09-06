// import React from "react";
// import './Navbar.css'

// interface Props {
//     item1:string;
//     item2: number;
//     ok?: boolean;
// }

// export default function Navbar (props:Props) {
//     return (
//         <div>
//             {props.item1}
//             {props.item2 }
//         </div>
//     );
// }

import React from "react";
import './Navbar.css';
import Cidades from '../utils/cities'

interface Props{
    item1: string;
    item2: number;
    ok?: boolean;
}

function Navbar(props:Props){
    return(
        <div>
            {props.item1}
            {props.item2}
            {
                Object.keys(Cidades).map ((key) =>{
                    return(
                        <h1 key= {key}>{Cidades[key as keyof typeof Cidades]}</h1>
                    );
                })
            }
        </div>
    );

}

export default Navbar;