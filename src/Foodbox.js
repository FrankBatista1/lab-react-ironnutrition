import React from 'react'
import { Card, Col, Divider, Button } from "antd";


export const Foodbox = (props) => {
  return (
  <Col>
    <Card
    title={props.name}
    style={{ width: 230, height: 300, margin: 10 }}
  >
    <img src={props.image} height={60} alt="pic"/>
    <p>Calories: {props.calories}</p>
    <p>Servings: {props.servings}</p>
    <p>
      <b>Total Calories: {props.calories * props.servings} </b> kcal
    </p>
    <Button type="primary"> Delete </Button>
  </Card>
</Col>
  )
}


