import { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
  const { setSearchTerm, filterRecipes } = useRecipeStore(state => ({
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes
  }));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;