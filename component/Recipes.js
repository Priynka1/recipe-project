import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Recipe = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState("");

  useEffect(() => {
    fetchRecipeInfo();
  }, []);

  const fetchRecipeInfo = async () => {
    const data = await fetch(`https://dummyjson.com/recipes/${resId}`);
    const readAble = await data.json();
    console.log(readAble);
    setResData(readAble);
  };

  return (
    <>
      <div className="recipeInfo">
        <h1>Recipe </h1>
        <img className="recipe-info-img" src={resData.image} />
        <h3>{resData.name}</h3>
        <h4> cuisine :{resData.cuisine}</h4>
        <p> ingredients :{resData.ingredients}</p>
      </div>
    </>
  );
};
export default Recipe;
