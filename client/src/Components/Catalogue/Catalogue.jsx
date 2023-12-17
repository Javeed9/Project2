import React from 'react'
import { products } from './catalogueData'
import './styles.css'

function Catalogue() {
  return (
    <div className="product__list">
    {products.map((element) => (
      <div className="product__item" key={element.id}>
        <img src={element.imageId} alt="" />
        <h3>{element.name}</h3>
      </div>
    ))}
  </div>
  )
}

export default Catalogue;