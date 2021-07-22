import { Component } from "react";
import { MonsterCardList } from "./components/monster-card-list";
import { SearchBox } from "./components/search-box";
import "./App.css";
class App extends Component {
	state = {
		monsters: [],
		searchField: "",
	};

	async componentDidMount() {
		// API calls here
		await fetch("https://jsonplaceholder.typicode.com/users").then(
			(response) =>
				response
					.json()
					.then((monsters) => this.setState({ monsters: monsters }))
		);
	}

	handleChange = (e) => {
		// 2nd param , gets called after setState
		this.setState({ searchField: e.target.value }, () => {});
	};
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					handleChange={this.handleChange}
				/>
				<MonsterCardList monsters={filteredMonsters}></MonsterCardList>
			</div>
		);
	}
}

export default App;
