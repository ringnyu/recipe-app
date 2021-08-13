import React, {useEffect, useState} from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '511343b1';
  const APP_KEY ='fdbe5ea2f9251cb42c31d80ce65e7e2d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect (()=>{
    getRecipes();
  }, [query])

  const getRecipes = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  }
 
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')

  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button> 
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
            <Recipe 
            key={recipe.recipe.uri}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              dishType={recipe.recipe.dishType}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))} 
      </div>
        
    </div>
  );
}
export default App;