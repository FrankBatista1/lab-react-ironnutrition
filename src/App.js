import "./App.css";
import foods from "./foods.json";
import { useState } from 'react'
import { Foodbox } from "./Foodbox";
import { OmitProps } from "antd/lib/transfer/ListBody";


function App() {
const [food, setfood] = useState(foods)
  
return (
  <div>
    {food.map((meal) => {
      return (
    <div>
      {/* <p> {meal.name} </p>
      <img src={meal.image} style={{width: 300}} alt="mealphoto"/> */}
      <Foodbox name={meal.name} image={meal.image} calories= {meal.calories} servings={meal.servings}/>
    </div>
      )
    })}
    
  </div>
  )
}

export default App;
