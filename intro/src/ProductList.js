import React, { Component } from 'react';
import {Table, Button} from "reactstrap"


export default class ProductList extends Component {
   
  render() {
    return (
      <div>
        <h3 style={{marginBottom:"30px",textAlign:"center"}}> {this.props.info.title} - {this.props.currentCategory}</h3>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th style={{width:"150px"}}>Product Name</th>
                    <th style={{width:"150px"}}>Unit Price</th>
                    <th style={{width:"200px"}}>Quantity Per Unit</th>
                    <th style={{width:"150px"}}>Units In Unit</th>
                    <th style={{width:"150px"}}></th>
                </tr>
            </thead>
            <tbody>
            {this.props.products.map(product=>(
                <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitsInStock}</td>
                    <td><Button onClick={()=>this.props.addToCart(product)} style={{color:"black", fontFamily:"Arial", backgroundColor:"#F7CA00", borderRadius:"20px", borderWidth:"2px", fontSize:"13px"}} >Add to Chart</Button></td>
             </tr>
             ))}
            </tbody>
        </Table>
      </div>
    );
  }
}
