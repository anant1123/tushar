import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems)
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const history = useNavigate();

  const handleCheckout = () => {
    // Perform checkout logic or any other necessary actions

    // Redirect to CheckoutSuccessPage
    history('/checkout-success');
  };

  const handleform =()=>{
    history('/')
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='cart-data'>
            <h1>Cart</h1>
            {cartItems && cartItems ? <table className='table table-hover'>
              <thead>
                <tr>
                  <th>
                    Title
                  </th>
                  <th>
                    image
                  </th>
                  <th>
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr>
                    <td>
                      {item.title}
                    </td>
                    <td>
                      <img src={item.imageUrl}
                        alt="sss" />      </td>
                    <td>
                      {item.price}
                    </td>
                  </tr>

                ))}
              </tbody>
            </table> : <></>}

            <p>Total: ${totalPrice}</p>
            <button onClick={handleform}>
        <span>
        Go to Home
        </span>
      </button>
            <button  id="adds"onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CartPage;
