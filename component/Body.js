import { useEffect, useState } from "react";
import { Card } from "./RecipeCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [data, setData] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [newRecipe, setNewRecipe] = useState("");

  useEffect(() => {
    // console.log("use effect");
    const data = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const readable = await response.json();
      console.log(readable);
      setData(readable.recipes);
      setNewRecipe(readable.recipes);
    };
    data();
  }, []);

  return data.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="recipe-conatiner">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Recipe "
            value={searchRecipe}
            onChange={(e) => {
              setSearchRecipe(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchRecipe);
              let filterRecipe = newRecipe.filter((recipe) => {
                return recipe.name
                  .toLowerCase()
                  .includes(searchRecipe.toLowerCase());
              });
              setData(filterRecipe);
            }}
          >
            Search
          </button>
        </div>
        <div className="filterbtn">
          <button
            onClick={() => {
              let filterItalianFood = newRecipe.filter((recipe) => {
                return recipe.cuisine === "Italian";
              });
              setData(filterItalianFood);
            }}
          >
            Italian Recipe
          </button>
          <button
            onClick={() => {
              let filterIndianFood = newRecipe.filter((recipe) => {
                return recipe.cuisine === "Indian";
              });
              setData(filterIndianFood);
            }}
          >
            Indian Recipe
          </button>
          <button
            onClick={() => {
              let filterAsianFood = newRecipe.filter((recipe) => {
                return recipe.cuisine === "Asian";
              });
              setData(filterAsianFood);
            }}
          >
            Asian Recipe
          </button>
          <button
            onClick={() => {
              let filterPakistaniFood = newRecipe.filter((recipe) => {
                return recipe.cuisine === "Pakistani";
              });
              setData(filterPakistaniFood);
            }}
          >
            Pakistani Recipe
          </button>
          <button
            onClick={() => {
              let filterkoreanFood = newRecipe.filter((recipe) => {
                return recipe.cuisine === "Korean";
              });
              setData(filterkoreanFood);
            }}
          >
            Korean Recipe
          </button>
        </div>
      </div>

      <div className="card">
        {data.map((elem) => {
          return (
            <Link key={elem.id} to={`/recipes/${elem.id}`}>
              <Card key={elem.id} recipes={elem}></Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
