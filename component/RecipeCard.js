export const Card = ({ recipes }) => {
  const { name, image, rating, cuisine } = recipes;
  return (
    <>
      <div className="recipe-card">
        <img className="recipe-img" src={image}></img>
        <h4>{name}</h4>
        <h5>Rating {rating}</h5>
        <h5>cuisine {cuisine}</h5>
        {/* <button className="order-btn">Order Now</button> */}
      </div>
    </>
  );
};
