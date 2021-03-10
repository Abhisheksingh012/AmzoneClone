import React from 'react';

import Product from '../components/product';
import data from "../data.js";

export default function HomeScreen(){
  return (<div className="row center">
          {data.products.map((product) => (
          <Product product={product} key={product._id}/>
          ))}
        </div>);
}