import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const Coffee = props => {
  const dispatch = useDispatch();

  const addToCart = coffeeToAdd => dispatch(actions.addCoffeeToCartActionCreator(coffeeToAdd));

  console.log('props in coffee: ', props);

  return (
    <div className='coffeeBox'>
      <h1>{props.coffeeObj.name}</h1>
      <h2>Region: {props.coffeeObj.region}</h2>
      <h2>Roaster: {props.coffeeObj.roaster}</h2>
      <h2>Process: {props.coffeeObj.process}</h2>
      <h2>Tasting Notes: {props.coffeeObj.notes}</h2>
      {!props.inCart ? <button onClick={() => addToCart(props.coffeeObj)}>Add To Cart</button> : ''}
    </div>
  )
}
export default connect(null, null)(Coffee);