import React from "react";
import "./Home.css"
import PerfumeCard from './../../Components/PerfumeCard/PerfumeCard'
import { PERFUMES , TITLE ,THEME} from "./../../config/data";



function Home(){
    return(
        
        <div style={{backgroundColor:THEME.background}}>
            <h1 style={{color:THEME.title , margin:0}}>{TITLE}</h1>

            <div className="perfume-card-container">
             
             {PERFUMES.map((perfumeItem)=>{

           return <PerfumeCard 
            imgUrl={perfumeItem.imgUrl}
            title={perfumeItem.title}
            description={perfumeItem.description}
            price={perfumeItem.price}
            />
        })}
               </div>
            </div>
        
    )
}
export default Home;