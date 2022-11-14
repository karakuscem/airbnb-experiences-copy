import React from "react";
import star from '../assets/star.png';
import '../styles/styles.css';

export default function Card(props) {
    let badgeText;
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../assets/${props.card.coverImg}`)} alt="" className="card--photo" />
            <div className="card--stats">
                <img src={star} alt="" className="card--stats--icon" />
                <span>{props.card.rating}</span>
                <span className="gray"> ({props.card.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    );
}