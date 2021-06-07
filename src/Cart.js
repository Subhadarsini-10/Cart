import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
        const {product} = props;
        return (
            <div className = "cart">
                {product.map((products) => {
                    return (<CartItem products={products} key = {products.id} 
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteProduct = {props.onDeleteProduct}
                    />
                    )   
                })}
            </div>
        )
    }

export default Cart
