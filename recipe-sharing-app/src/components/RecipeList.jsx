import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm, addFavorite, removeFavorite, favorites } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
    searchTerm: state.searchTerm,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    favorites: state.favorites
  }));

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      {displayRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;