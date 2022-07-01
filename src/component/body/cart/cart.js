import React from "react";
import '../../../App.css';
import headerline from '../../../assects/headerline.svg';
import minus from '../../../assects/minus.svg';
import plus from '../../../assects/plus.svg';
import edit from '../../../assects/edit.svg';
import trash from '../../../assects/trash.svg';
import heart from '../../../assects/heart.svg';
import lock from '../../../assects/lock.svg';
import { incCart , decCart , Remove  } from '../../../redux/acion/index';

// import store from "../../../store";
import { useSelector , useDispatch } from 'react-redux';
function Cart() {
    
    // const newState = useSelector ((state) => state.Change)
    const  dispatch = useDispatch();
    // console.log(newState);
    const updatedState = useSelector((state) => state.Change);
    console.log(updatedState);
    return (
        <div className="demo-GridRowExample-markup cart">
            <header>Your Shopping Bag<br />
            {/* <h1>{updatedState.count}</h1> */}
                <img src={headerline} alt="here is shape" />
            </header>
            <div className="aem-Grid aem-Grid--12 demo-Grid cart-section">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn ">
                {updatedState.products.map((prod) => {
                 return ( 
<div  className="aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid cart-items ">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1  demo-GridColumn cart-img">
                            <img src={prod.image} alt="photo" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 cart-list">
                            <li>{prod.title}</li>
                            <li>Size : Medium</li>
                            <li>Color : Storm</li>
                            <li>${prod.price}</li>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 add-minus-icon">
                            <button onClick={() =>dispatch(decCart(prod))}><img src={minus} alt="photo" /></button>
                            <input type="text" value={prod.count}/>
                            <button onClick={() =>dispatch(incCart(prod))}><img src={plus} alt="photo" /></button>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 ear-button">
                            <button><img src={edit} alt="photo" />Edit item</button><br />
                            <button onClick={() =>dispatch(Remove(prod))}><img src={trash} alt="photo" />Remove</button><br />
                            <button><img src={heart} alt="photo" />Save for later</button>
                        </div>
                    </div>
                 );
               })}
                    <div className="payment-section">
                        <div className="shiping-section">
                            <p>Estimate your Shipping</p>
                            <div className="shiping">
                                <select name="shiping" id="cart">
                                    <option value="shiping">Shipping to 91001</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className="shiping-section">
                            <p>Enter a Coupon Code</p>
                            <div className="shiping">  <select name="shiping" id="cart">
                                <option value="shiping">20% discount applied</option>
                            </select>
                            </div>
                        </div>
                        <hr />
                        <div className="shiping-section">
                            <p>Apply Gift Card</p>
                            <div className="shiping">
                                <select name="shiping" id="cart">
                                    <option value="shiping"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn cart-block">
                    <h1>Pricing Summary</h1>
                    <div className="cart-pricing">
                        <div className="pricing">
                            <div className="pricing-title">
                                <h2>Subtotal</h2>
                                <h2>Coupon</h2>
                                <h2>Gift Card</h2>
                                <h2>Estimated tax</h2>
                                <h2>Estimated shipping</h2>
                                <p>Estimated Total</p>
                            </div>
                            <div className="pricing-amount">
                                <h2>$ 388.00</h2>
                                <h2>- $ 77.60</h2>
                                <h2>- $ 100.00</h2>
                                <h2>$ 23.28</h2>
                                <h2>FREE</h2>
                                <p>$ 233.68</p>
                            </div>
                        </div>
                        <div className="cart-button">
                            <div className="chekout"><button> <img src={lock} alt="here is lock logo" />CHECKOUT</button></div>
                            <div className="paypal"><button className="imp-btn" style={{ backgroundImage: "url(PP_BTN@2x.png)" }}></button></div>                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;