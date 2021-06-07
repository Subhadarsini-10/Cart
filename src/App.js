import React, { Component } from 'react'
import Cart from './Cart';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        product: [
            {
                price: 999,
                title: 'Mobile Phone',
                Qty: 1,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Watch',
                Qty: 10,
                img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                Qty: 4,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                id: 3
            }
        ]
         
    }
}
handleIncreaseQuantity = (products) => {
    console.log('bhdcjhsd')
    const {product} = this.state
    const index = product.indexOf(products)

    product[index].Qty +=1
    this.setState({
        products: product
    })
}
handleDecreaseQuantity = (products) => {
    const {product} = this.state
    const index = product.indexOf(products)

    if(product[index].Qty === 0){
        return;
    }

    product[index].Qty -=1
    this.setState({
        products: product
    })
}
handleDeleteProduct = (id) => {
    const {product} = this.state;

    const items = product.filter((item) => item.id !== id); 

    this.setState({
        product: items
    })
}

getCartCount = () => {
  const {product} = this.state
  let count = 0

  product.forEach((products) => {
    count += products.Qty
  })
  return count
}

getCartTotal = () => {
  const {product} = this.state

  let cartTotal = 0

  product.map((products) => {
    cartTotal += products.Qty * products.price
  })
  return cartTotal
}
  render(){
    const {product} = this.state
    return (
      <div className="App">
        <NavBar count = {this.getCartCount()}/>
        <Cart 
        product = {product}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}/>
        <div style = {{padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
