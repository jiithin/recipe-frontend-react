import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getARecipeDetailAPI } from '../services/allAPI';


function Item() {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);
  
    const getARecipeDetails = async () => {
      try {
        const result = await getARecipeDetailAPI(id);
        setRecipeDetails(result.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };
  
    useEffect(() => {
      getARecipeDetails();
    }, []);
  
    if (!recipeDetails) {
      return <div>Item Nolonger Exist</div>;
    }
  return (
    <>
    
    <section lassName="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0 p-5" src={recipeDetails.image} alt={recipeDetails.name} />
            </div>
            <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{recipeDetails.name}</h1>
              <div className="fs-5 mb-4">
                <span>Cuisine: {recipeDetails.cuisine}</span>
              </div>
              <span className="my-3">Meal Type: {recipeDetails.mealType}</span>
              <div className="my-3">Time required for meal preparation: {recipeDetails.prepTimeMinutes} mins</div>
              
              
            </div>
          </div>
          <div className="h3 fw-bolder">Ingredients</div>
              <p>{recipeDetails.ingredients}</p>
          <div className="h3 fw-bolder">Preparation:</div>
          <p>{recipeDetails.instructions}</p>
        </div>
        </section>
      
    </>
  )
}

export default Item