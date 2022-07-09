import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div className="picture">
                <img src={props.item.imageUrl} alt=""/>
            </div>
            <div className="content">
                <span className="location"><i className="fa-solid fa-location-dot"></i>{props.item.location}</span>
                <h1>{props.item.title}</h1>
                <span className="date">{props.item.startDate}-{props.item.endDate}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}