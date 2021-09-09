import "./App.css";
import foods from "./foods.json";
import { useState } from 'react'
import { Foodbox } from "./Foodbox";
import { AddFoodForm } from "./AddFoodForm";


function App() {
const [food, setFood] = useState(foods)
const [singleFood, setSingleFood] = useState({
  name: "",
  image: "",
  calories: "", 
  servings: ""
});

const handleSubmit = (e) => {
    e.preventDefautl();
    setFood([...food, singleFood])
    setSingleFood({
    name: "",
    image: "",
    calories: "", 
    servings: "",
  })
} 



const handleChange = (letter) => (event) => setSingleFood({...singleFood, [letter]: event.target.value})//????
  
return (
  <div>
    <AddFoodForm functionToChange={handleChange}/>
    {food.map((meal) => {
      return (
    <div>
      <Foodbox name={meal.name} image={meal.image} calories= {meal.calories} servings={meal.servings}/>
    </div>
      )
    })}
    
  </div>
  )
}

export default App;
