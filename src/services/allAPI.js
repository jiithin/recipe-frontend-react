import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"



// get all recipies
export const getAllRecipesAPI= async(searchKey)=>{
    return await commonAPI('GET', `${SERVER_URL}/recipes?search=${searchKey}`)
}

// get a recipie detail
export const getARecipeDetailAPI= async(id)=>{
    return await commonAPI('GET', `${SERVER_URL}/details/${id}`)
}

// add a recipie detail
export const addARecipeDetailAPI= async(reqBody)=>{
    return await commonAPI('POST', `${SERVER_URL}/add`,reqBody)
}

// delete a recipie detail
export const removeARecipeDetailAPI= async(id)=>{
    return await commonAPI('DELETE', `${SERVER_URL}/remove/${id}`)
}
