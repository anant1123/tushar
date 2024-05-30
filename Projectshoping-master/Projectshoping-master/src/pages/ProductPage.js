import React, { useState, useEffect , useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProduct } from '../api/api';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
   console.log(id)
  fetchProduct(id).then(setProduct);
  }, [id]);


  

  const { addToCart } = useContext(CartContext);
  const navigate =useNavigate();

  const handleAddToCart = () => {
 console.log(product);
    addToCart(product);
    navigate('/cart')

  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleform =()=>{
    navigate('/')
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 product-add'>
        <div >
      <h1>{product.title}</h1>
      <div className='product-detilas'>
      <img src={product.imageUrl} alt={product.description} style={{ width: '300px', height: 'auto' }}/>
      <div className='product-data'>
      <p>{product.description}</p>
      <h6>Price: {product.price}</h6>
      <h6>Discounted Price : {product.discountedPrice}</h6>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleform}>
        <span>
        Go to Home
        </span>
      </button>

      
      </div>
      </div>
      <div>
      </div>
    </div>
        </div>
      </div>
    </div>
    
  );
}

export default ProductPage;
