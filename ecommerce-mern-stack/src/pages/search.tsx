import React, { useState } from 'react'
import ProductCard from './product-card';

const Search = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [maxPrice, setMaxPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);

    const addtoCart = () => {
        console.log("add to cart");
    }
    const isnextpage = true;
    const isprevpage = true;
    return (
        <div className='product-search-page'>
            <aside>
                <h2>Filters</h2>
                <div>
                    <h4>Sort</h4>
                    <select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="asc">Price (Low to High) </option>
                        <option value="desc">Price (High to Low)</option>
                    </select>
                </div>
                <div>
                    <h4>Max Price</h4>
                    <input type="range" name="maxPrice" id="maxPrice" min={0} max={10000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
                </div>
                <div>
                    <h4>Category</h4>
                    <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="all">All</option>
                    </select>
                </div>
            </aside>
            <main>
                <h1>Products</h1>
                <input type="text" placeholder='search by name ...'
                    value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="search-product-list">
                    <ProductCard 
                        photo={"https://appleshop.com.pk/wp-content/uploads/2020/11/macbook-gray.jpg"}
                        productId={"123"} 
                        name={"sfsd"} 
                        price={123} 
                        stock={123} 
                        handler={addtoCart}  />
                </div>
                <article>
                    <button disabled={!isprevpage} onClick={() => setPage(prev => prev - 1)}>Prev</button>
                    <span>
                        {page} of {4}
                    </span>
                    <button disabled={!isnextpage} onClick={() => setPage(prev => prev + 1)}>Next</button>
                </article>
            </main>
        </div>
    )
}

export default Search
