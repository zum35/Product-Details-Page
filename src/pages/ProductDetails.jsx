import { useState,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom'

export default function ProductDetails() {
  const [product, setProduct] = useState({})
const {id}=useParams();
useEffect(()=>{
  async function fetchProductDetails() {
    try {
      const response=await fetch(
        `https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/productdetails/id${id}.json`
        
      )
      const data=await response.json();
      setProduct(data)
    }catch(error){
      console.error('Error fetching product details:',error)
    }
  
  }
  fetchProductDetails();},[id]);

  return (
    <div>
      <Link to="/">Back Home</Link>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width='100' alt={product.name} />
        </div>
      )}
    </div>
  )
}
