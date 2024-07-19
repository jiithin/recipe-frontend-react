import React, { useEffect, useState } from 'react'
import { addARecipeDetailAPI, getAllRecipesAPI } from '../services/allAPI';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AddItem() {



    const[allRecipes,setAllrecipes]=useState('')

    const allRecipesOnHomePage=async()=>{
        const result=await getAllRecipesAPI()
        setAllrecipes(result.data)
    }

    const[newRecipe,setNewRecipe]=useState({
      id:"",
      name:"",
      ingredients:"",
      instructions:"",
      prepTimeMinutes:"",
      cookTimeMinutes:"",
      servings:"",
      difficulty:"",
      cuisine:"",
      caloriesPerServing:"",
      tags:"",
      userId:"",
      image:"",
      rating:"",
      reviewCount:"",
      mealType:""
    })

    const addNewRecipe=async()=>{
      const {id,name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,tags,userId,image,rating,reviewCount,mealType}=newRecipe
      if (!id || !name || !ingredients || !instructions || !prepTimeMinutes || !difficulty || !cuisine || !image || !mealType) {
        alert('Missing Fields Found')
      } else {
        const reqBody=new FormData()

        reqBody.append("id",id)
        reqBody.append("name",name)
        reqBody.append("ingredients",ingredients)
        reqBody.append("instructions",instructions)
        reqBody.append("prepTimeMinutes",prepTimeMinutes)
        reqBody.append("cookTimeMinutes",cookTimeMinutes)
        reqBody.append("servings",servings)
        reqBody.append("difficulty",difficulty)
        reqBody.append("cuisine",cuisine)
        reqBody.append("caloriesPerServing",caloriesPerServing)
        reqBody.append("tags",tags)
        reqBody.append("userId",userId)
        reqBody.append("image",image)
        reqBody.append("rating",rating)
        reqBody.append("reviewCount",reviewCount)
        reqBody.append("mealType",mealType)

        try {
          const result=await addARecipeDetailAPI(reqBody)
          if (result.status===200) {
            alert("Item added succesfully.")
            
            setNewRecipe({
              id: "",
              name: "",
              ingredients: "",
              instructions: "",
              prepTimeMinutes: "",
              cookTimeMinutes: "",
              servings: "",
              difficulty: "",
              cuisine: "",
              caloriesPerServing: "",
              tags: "",
              userId: "",
              image: "",
              rating: "",
              reviewCount: "",
              mealType: ""
            })
            console.log(result.data);
          }else{
            alert(result)
          } 
        } catch (error) {
          console.log(error);
        }
      }
    }
  console.log(newRecipe);

  

  useEffect(()=>{
    allRecipesOnHomePage()
  },[newRecipe])
   
  return (
    <>
      <div className="d-flex align-items-center justify-content-center text-center">
        <Card className="w-75 shadow p-2 mb-5" style={{ marginTop: "50px" }}>
          <Card.Title className='mt-4 fw-bold' style={{color:"#19ba80"}}>Add New Recipie</Card.Title>
          <Card.Body className="p-5" style={{overflow:'hidden'}}>
            <FloatingLabel
              controlId="floatingInput"
              label="Id"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    id: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Recipie "
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    name: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Ingredients "
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    ingredients: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Instructions"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    instructions: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Preparation Time in Minutes"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    prepTimeMinutes: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Difficulty Level"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    difficulty: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Cuisine Type"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    cuisine: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Meal Type"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    mealType: e.target.value,
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Recipe Image"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewRecipe({
                    ...newRecipe,
                    image: e.target.value,
                  })
                }
              />
            </FloatingLabel>

            <Card.Text style={{color:"#ff4915"}}>
              *<small>The newly added recipe will be displayed in the homepage.</small>
            </Card.Text>
            <Button className="btn btn-light text-white w-100 mb-3" onClick={addNewRecipe} style={{backgroundColor:"#17ad76"}}>
              Add Recipe
            </Button>

            <Link
              className="btn btn-outline-danger w-100"
              to={'/'}
            >
              Cancel
            </Link>
          
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default AddItem