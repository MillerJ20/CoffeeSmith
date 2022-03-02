import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const Coffee = props => {
  const dispatch = useDispatch();

  const addToCart = coffeeToAdd => dispatch(actions.addCoffeeToCartActionCreator(coffeeToAdd));

  console.log('props in coffee: ', props);

  return (
      <div className='coffeeTextBox'>
        <strong><h1>{props.coffeeObj.name}</h1></strong>

        <span className='eachTextLine'><h2>Region: {props.coffeeObj.region}</h2></span>
        <span className='eachTextLine'><h2>Roaster: {props.coffeeObj.roaster}</h2></span>
        <span className='eachTextLine'><h2>Process: {props.coffeeObj.process}</h2></span>
        <span className='eachTextLine'><h2>Tasting Notes: {props.coffeeObj.notes}</h2></span>
        <span className='eachTextLine'>{!props.inCart ? <button className='btn' onClick={() => addToCart(props.coffeeObj)}> Add To Cart </button> : ''}</span>
      </div>

  )
}
export default connect(null, null)(Coffee);