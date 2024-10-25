import recipes from "../Models/recipeSchema.js";


//create /POST method
export const createrecipe = async(req,res)=>{ 
    try {
        const recipe = new recipes(req.body)
        await recipe.save();
        res.status(200).json({message:"recipe added successfully",data:recipe})
    } catch (error) {
        res.status(500).json({message:"Internal server error in create recipe",data:error})
    }
}

//get method 

export const getAllrecipes  = async(req,res)=>
{
    try {
        const getrecipe = await recipes.find();
        res.status(200).json({message:"recipe retrieved successfully",data:getrecipe})
    } catch (error) {
        res.status(500).json({message:"Internal server error to getAllrecipes",data:error})   
    }
}

//getby ID
export const getrecipeById = async(req,res)=>{
    try {
        const recipeId = req.params.id;
        const recipe = await recipes.findById(recipeId)
        if(!recipe)
        {
            return res.status(404).json({message:"recipe not found"})
        }
        res.status(200).json({message:"recipe retrieved successfully",data:recipe})
    } catch (error) {
        res.status(500).json({message:"Internal server error to getAllrecipes",data:error})      
    }
}

//update method

export const updaterecipe = async(req,res)=>{
    try {
        const recipeId = req.params.id;
        const {name,ingredients,procedure,duration} = req.body
        console.log(req.params.id);
        
        // const result = await recipes.findByIdupdate(
        //     {_id:recipeId},
        //     {name,ingredients,procedure,duration},
        //     {new:true})
        // if(result.matchedcount===0)
        // {
        //     return res.status(404).json({message:"Recipe not found"})
        // }
        // console.log(result);
                
        const recipe = await recipes.findById(recipeId);
        if(recipe){
            recipe.name = name,
            recipe.ingredients = [ingredients],
            recipe.procedure = procedure,
            recipe.duration = duration
            await recipe.save();
        }
        console.log(recipe);
        
        res.status(200).json({message:"recipe updated",data:recipe})
    } catch (error) {
        res.status(404).json({message:"recipe not found",data:error})
    }
}
//delete 
export const deleterecipe = async(req,res)=>{

    try {
        console.log(req.params.id);
        const recipeId = req.params.id;
        const result = await recipes.findByIdAndDelete({_id:recipeId}) 
        
        
        // if(!result){
        //     return res.status(404).json({ message: "recipe Not Found" });
            
        // } 
        const recipe = await recipes.find();
        res.status(200).json({message:"recipe deleted", data:recipe})
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
          });
    }
}
