import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/favorites">Favorites</Link> | 
          <Link to="/recommendations">Recommendations</Link>
        </nav>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route path="/" element={
            <div>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </div>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
