import React from "react";
import { MonsterCard } from "./monster-card";
import "../styles/monster-card-list.css";

export const MonsterCardList = (props) => {
	// console.log(props);
	// console.log(props.children);
	return (
		<div className="monster-card-list">
			{props.monsters.map((monster) => (
				<MonsterCard key={monster.id} monster={monster} />
			))}
		</div>
	);
};
