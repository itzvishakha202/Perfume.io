import React from "react";
import "./PerfumeCard.css"
import { THEME } from "../../config/data";

function PerfumeCard({imgUrl, title, description, price}){


    return(
        <div className="perfume-card">
            <img
             src={imgUrl}
             className="perfume-card-img"
             alt="perfumeImg"/>
            <h1 className="perfume-card-title" style={{color:THEME.title}}>{title}</h1>
            <p className="perfume-card-desc" style={{color:THEME.description}}>{description}</p>

            {
                price ?
                <p className="perfume-card-price">
                    $ {price}
                </p>
                 : "not available"
            }

            <button className="perfume-card-button">
                add to cart
            </button>
        </div>
    )
}
export default PerfumeCard;
