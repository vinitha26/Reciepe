import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';

const YOUR_API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props){
    super(props);
    this.searchRecipe = this.searchRecipe.bind(this);
    this.state = {
      recipes: []
    };
  }

  searchRecipe(recipeName){
    fetch(`https://www.food2fork.com/api/search?key=${YOUR_API_KEY}&q=${recipeName}`)
    .then(response=>response.json())
    .then(data=>
      this.setState({
      recipes: data.recipes
    }));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Recipe Search</h2>
        </header>
        <SearchBar onSubmit={this.searchRecipe}/>
        <Recipes recipes={this.state.recipes} />
      </div>    
    );
  }
}

export default App;
