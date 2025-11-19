import React, { use } from 'react'
import { useState } from 'react'
import ProductList from '../components/productList.jsx'

function content () {
  const [product, setProduct] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0.0)
  const [status, setStatus] = useState('')

  const [items, setItem] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    const newItem = { product, category, price, status }

    setItem([...items, newItem])

    console.log(items)
  }

  return (
    <div>
      <div className='bg-green-300 mx-100 '>
        <form
          className='grid grid-cols-2 gap-3 px-20 py-5'
          onSubmit={handleSubmit}
        >
          <label htmlFor='product'>
            <input
              type='text'
              placeholder='product name...'
              className='border-1 col-span-1 w-full'
              name='product'
              onChange={e => setProduct(e.target.value)}
            />
          </label>

          <label htmlFor='category'>
            <input
              type='text'
              placeholder='category...'
              className='border-1 col-span-1 w-full'
              name='category'
              onChange={e => setCategory(e.target.value)}
            />
          </label>

          <label htmlFor='price'>
            <input
              type='number'
              placeholder='price...'
              className='border-1 col-span-1 w-full'
              name='price'
              onChange={e => setPrice(e.target.value)}
            />
          </label>

          <label htmlFor='status'>
            <input
              type='text'
              placeholder='status...'
              className='border-1 col-span-1 w-full'
              name='status'
              onChange={e => setStatus(e.target.value)}
            />
          </label>

          <button type='submit'>submit</button>
        </form>
      </div>

      <h2>
        <strong>Product Name: </strong>
        {product}
      </h2>
      <h2>
        <strong>Category: </strong>
        {category}
      </h2>
      <h2>
        <strong>Price: </strong>
        {price}
      </h2>
      <h2>
        <strong>Status: </strong>
        {status}
      </h2>

      <ProductList items={items} />
    </div>
  )
}

export default content
