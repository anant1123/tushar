import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {

  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems.length)

  const navigate=useNavigate()

  const handleform =()=>{
    navigate('/cart')
  }

  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <span>

          <i class="bi bi-emoji-smile"></i>
            </span>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/"><span>
                Product
                </span></Link>
              </li>
              <div class="d-flex" role="search" >
                <span id="home" onClick={handleform}>
              <i class="bi bi-cart">
                <sup>
              {cartItems?.length}
                </sup>
              </i>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
