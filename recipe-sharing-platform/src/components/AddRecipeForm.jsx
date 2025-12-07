import {useState} from "react";

const AddRecipeForm = () => {
  const [title,setTitle] = useState("");
  const [ingredients,setIngredients] = useState("");
  const [steps,setSteps] = useState("");

  const [error,setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients
      .split(/[,\\n]+/)
      .map((item) => item.trim())
      .filter(item => item !== "");

    if (ingredientsList.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    } 

    setError("");

    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps
    };

    console.log("New Recipe:", newRecipe);
  }
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-2 border rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients (separate by commas or new lines)"
          className="w-full p-2 border rounded mb-4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Preparation steps"
          className="w-full p-2 border rounded mb-4"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm