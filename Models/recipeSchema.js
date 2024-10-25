import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    name:String,
    ingredients:[],
    procedure:String,
    duration:String,
})

const recipe = mongoose.model("recipe",recipeSchema)

export default recipe;