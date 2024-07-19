import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllRecipesAPI, removeARecipeDetailAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';

function Home() {
    const [allRecipes,setAllRecipes]=useState('')
    const[searchKey,setSearchKey]=useState('')


    const allRecipesOnHomePage=async()=>{
        const result=await getAllRecipesAPI(searchKey)
        setAllRecipes(result.data)
    }
    console.log(allRecipes);
        
const handleDelete=async (id)=>{
    const result=await removeARecipeDetailAPI(id)
    allRecipesOnHomePage()
}

useEffect(()=>{
    allRecipesOnHomePage()
},[searchKey])

  return (
    <>
      <div>
        <div
          style={{ position: "sticky", top: "0px", zIndex: "1" }}
          className="bg-white py-4"
        >
          <form className="d-flex input-group mx-auto w-75">
            <input
              type="search"
              className="form-control"
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search Recipes..."
              aria-label="Search"
            />
            <Link className='btn btn-light text-white fw-bolder' style={{backgroundColor:"#ff4915"}} to='/additem' >Add Your Recipe</Link>
          </form>
          
        </div>

        <section>
          <div className="container  mt-5">
            <div className="row justify-content-center">
              {allRecipes.length > 0 ? (
                allRecipes.map((recipe) => (
                  <div className="col mb-5 me-1">
                    <Card
                      key={recipe.id}
                      style={{
                        overflow: "hidden",
                        width: "20rem",
                        height: "24rem",
                      }}
                    >
                      <Card.Img variant="top" height={200} src={recipe.image} />
                      <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                          Difficulty:{recipe.difficulty}
                          <br />
                          Cuisine: {recipe.cuisine}
                        </Card.Text>

                        <div className="d-flex align-items-center justify-content-center ">

                        <ButtonGroup variant="outline" aria-label="Basic button group" className='w-100'>
                            <Link className="btn btn-light text-white "
                            style={{backgroundColor:"#ff7043" }}
                            onClick={() => handleDelete(recipe?.id)}><small>Delete</small> </Link>

                            <Link className="btn btn-light text-white"
                            style={{backgroundColor:"#1cc88a" }}
                            to={`/details/${recipe.id}`}>View</Link>
                            
                         </ButtonGroup>
                        
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <p className="text-danger fw-bold">Nothing to show</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home