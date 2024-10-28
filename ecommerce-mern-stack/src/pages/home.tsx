import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './product-card'

const Home = () => {
    const addtoCart = () => {
        console.log("add to cart");
    }
    return (
        <div className='home'>
            <section></section>
            <h1>LATEST PRODUCTS
                <Link to="/search" className='findmore'>More</Link>
            </h1>
            <main>
                <ProductCard 
                    photo={"https://appleshop.com.pk/wp-content/uploads/2020/11/macbook-gray.jpg"}
                    productId={"123"} 
                    name={"sfsd"} 
                    price={123} 
                    stock={123} 
                    handler={addtoCart} 
                />
            </main>
        </div>
    )
}

export default Home
