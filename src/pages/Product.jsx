import { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Product(props) {
  const [count, setCount] = useState(0)

  const { details } = props

  function handleIncrementClick() {
    setCount((c) => c + 1)
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }

  return (
    <div className='product p-4 border rounded shadow-sm flex items-center'>
      <Link to={`/products/${details.id}`} className="flex items-center">
      <img src={details.image} width='50' alt={details.name} className='mr-4' />
      <div className='product-info'>
        <h2 className='text-lg font-bold'>{details.name}</h2>
        <p className='text-gray-600'>{details.description}</p>
      </div>
      </Link>
      <div className='ml-auto flex items-center'>
        <button onClick={handleDecrementClick}
        className='px-2 py-1 bg-gray-200 rounded text-gray-700'></button>
        <span className='px-4'>{count}</span>
        <button
        onClick={handleDecrementClick}
        className='px-2 py-1 bg-blue-500 text-white rounded'>
          +
        </button>
      </div>
    </div>
  )
}
