import React from "react";
import "./cart.css";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const Cart = (props) => {
    return (
        <div className={'cartLayout'}>
            <div className={'yourCart'}>
                <div className={'titleCart'}>
                    <h1 className="title">Your Cart</h1>
                </div>
                <div className={'cartTable'}>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Roof Rack</td>
                            <td>$3,999.00</td>
                            <td>
                                <Button>+</Button>
                                <p>1</p>
                                <Button>-</Button>
                            </td>
                            <td>
                                Lorum ipsum text description
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3" align="right">
                                Subtotal : $3,999.00
                            </td>
                            <td colSpan="4" align="right">
                                <Button
                                    className="btn btn-danger"
                                >
                                    Empty cart
                                </Button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={'cartSummary'}>
               <h3>Cart Summary</h3>
                <table className={'summaryTable'}>
                    <tr>
                        <td>Roof Rack</td>
                        <td>1</td>
                        <td>$3,999.00</td>
                    </tr>
                    <tr>
                        <td>_ _ _ _ _</td>
                        <td>_ _ _ _ _</td>
                        <td>_ _ _ _ _</td>
                    </tr>
                    <tr>
                        <th>Subtotal: </th>
                        <th>   </th>
                        <th>$3,999.00</th>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>  </td>
                        <td>$599.85</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>   </td>
                        <td> Free </td>
                    </tr>
                    <tr>
                        <td>_ _ _ _ _</td>
                        <td>_ _ _ _ _</td>
                        <td>_ _ _ _ _</td>
                    </tr>
                    <tr>
                        <th>Total: </th>
                        <th>   </th>
                        <th>4,598.85</th>
                    </tr>
                </table>
                <Link to={'/payment'}><Button
                    className={'checkout'}
                    variant={"contained"}
                    style={
                        {
                            backgroundColor: "#395159",
                            color: "#EFEFEF",
                        }
                    }
                >Checkout</Button></Link>
            </div>
        </div>
    );
};

export default Cart;
