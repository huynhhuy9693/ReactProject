import { render } from "@testing-library/react";
import { Component } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, NavItem, Table } from "reactstrap";



class CartDetail extends Component
{
    state = {
        isLoading : true,
        cartItems : [],
      };
    
      async componentDidMount()
      {
        const response = await fetch(`http://localhost:8080/cart/cart-item/cart/490669`); 
        const body = await response.json();   
        this.setState({cartItems:body, isLoading: false});
        

      }
    render()
    {
        const {cartItems,isLoading}= this.state;
        if(isLoading)
    {
      return <p>Loading ...</p>
    }
        const CartItem = cartItems.map(item=>{
            return<tr key={item.productId} >
                <td>{item.productId}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
            </tr>
        })
        return(
            <div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                    </thead>
                    <tbody>
                        {CartItem}
                    </tbody>
                </table>
            </div>
        )
    }
      
    
   
   

   

} 
export default CartDetail;