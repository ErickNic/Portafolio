import React from "react";

const ProyectCard = (props) =>{
    return(
        <div className="ProyectCard">
            <div className="ProyectCard__Header">
                <h3>{props.nombre}</h3>
            </div>
            <card imgData={props.img}/>
            <div>
                <h4>Tech Stack</h4>
                {props.forEach(element => {
                    return(
                        <img src={element.img}/>
                    )  
                })
                }
            </div>
            <a href={props.github}>GitHub</a>
        </div>
    )
}
export default ProyectCard