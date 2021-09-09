import { Input } from 'antd'


export const AddFoodForm = (props) => {
  
  return (
    <form>
      <h2>Add new food</h2>
      <label>Name</label>
      <Input onChange={props.functionToChange} type="text" placeholder="eg. Banana" />
      <label>Image</label>
      <Input onChange={props.functionToChange} type="text" placeholder="eg. https://i.imgur.com/DupGBz5.jpg"/>
      <label>Calories</label>
      <Input onChange={props.functionToChange} type="number" placeholder= "eg 300"/>
      <label>Servings</label>
      <Input onChange={props.functionToChange} type="number" placeholder= "eg 1"/>
      <button onClick={props.functionToSubmit} >Add</button>
    </form>
  )
}
