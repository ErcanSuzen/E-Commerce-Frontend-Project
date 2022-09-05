import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

export default class CartList extends Component {
    renderCart(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}>My Cart</h1>
            <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.cart.map(cartItem =>(
                        <tr key={cartItem.product.id}>
                            <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.unitsInStock}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <Button color="danger" style={{borderRadius:"20px", fontFamily:"Arial", borderWidth:"2px", fontSize:"13px"}} onClick={()=> this.props.removeFromCart(cartItem.product)}>
                                    Remove
                                </Button>
                                </td>
                        </tr>))
                }
            </tbody>
            </Table>
            </div>
        )
    }
  render() {
    return (
      <div>
       {this.renderCart()}
      </div>
    );
  }
}
