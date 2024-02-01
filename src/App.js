import "./App.css";
import { Component } from "react";
import Cards from "./components/cards";
import SearchBox from "./components/searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
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
          placeholder="Search for monsters"
          handleChange={this.handleChange}
        />

        <Cards monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
