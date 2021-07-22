import React from "react";
import "../styles/monster-card.css";

export const MonsterCard = (props) => {
	return (
		<div className="monster-card-container">
			<img
				className="monster-card-image"
				alt={props.monster.name}
				src={`https://robohash.org/${props.monster.id}?set=set2`}
			/>
			<h2> {props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	);
};
