import React from 'react'
import { useCart } from '../Context/cartContext'

const ItemCard = ({ product }) => {

    const { addItemToCart } = useCart();

    const addToCartHandler = () => {
        addItemToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            creator: product.creator,
            hours: product.hours,
            lectures: product.lectures,
            rating: product.rating
        });
    };
    return (
        <div className='space-y-2'>
            <img src={product.thumbnail} alt="banner" className='' />
            <div className=' flex justify-center border-zinc-300 py-2 border hover:bg-zinc-100 text-zinc-800'><button onClick={addToCartHandler}>Add to Cart</button></div>
        </div>
    )
}

export default ItemCard