import React from "react";
import './Footer.css'

interface Props {
    item5: string;
    item6: string;
    item7: string;
    item8: string;

}

export default function Footer (props:Props) {

    return  (
        <div>
            {props.item5}
            {props.item6}
            {props.item7}
            {props.item8}
        </div>

    )

}