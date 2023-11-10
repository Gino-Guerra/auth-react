import { useEffect,useState } from "react"

export default function RecipeCard(){

    const [recipes, setRecipes] = useState()

    useEffect(()=>{
        fetch('https://auth-api-gg.web.app/recipes')
        .then(res => res.json())
        .then(setRecipes())
        .catch(alert)
       },[])
    return(
        
        <main>
        <h1>Recipes</h1>
        <RecipeForm token={token} setRecipes={setRecipes} />
        <section className="recipe-cards">
          {recipes && recipes.map(recipe => (
            <article key={recipe.id}>
              <h2>{recipe.name}</h2>
              <ul>
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <p>{recipe.recipe}</p>
            </article>
          ))}
        </section>
      </main>
    )
}