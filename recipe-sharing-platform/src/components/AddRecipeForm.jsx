import {useState} from "react";

const AddRecipeForm = () => {
  const [title,setTitle] = useState("");
  const [ingredients,setIngredients] = useState("");
  const [steps,setSteps] = useState("");

  const [errors,setErrors] = useState({});


  const validate = () => {
    const newErrors = {};

    if(!title.trim()) newErrors.title = "Title is required.";
    if(!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if(!steps.trim()) newErrors.steps = "Preparation steps are required.";

    const ingredientsList = ingredients
      .split(/[,\\n]+/)
      .map((item) => item.trim())
      .filter(item => item !== "");

    if (ingredients.trim() && ingredientsList.length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const ingredientsList = ingredients
      .split(/[,\\n]+/)
      .map((item) => item.trim())
      .filter(item => item !== "");

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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Recipe Title"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
          <textarea
            placeholder="Ingredients (separate by commas or new lines)"
            className="w-full p-2 border rounded"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div>
          <textarea
            placeholder="Preparation steps"
            className="w-full p-2 border rounded"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

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