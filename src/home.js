import React,{useState, useEffect} from 'react';
import axios from 'axios';
import MyHeader from './header.js';


function Home() {
    const [product, updateProduct]=useState([]);

    const getproduct=()=>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            updateProduct(response.data);
        })
    }

    useEffect(()=>{
        getproduct();
    })

    const[message, updatemessage]=useState();
    
    const addtocart=(pdata)=>{
       updatemessage("Please Wait Adding to Cart");
       var url=("http://localhost:1234/cart");
       axios.post(url, pdata)
       .then(response=>{
           updatemessage(pdata.pname + "Added in Cart..!");
       })
    }

  return (
    <>
     <MyHeader/>
     <div className='container mt-5'>
        <div className='row'>
            <p className='col-lg-12 text-center text-warning'> {message} </p>
            {
                product.map((pdata, index)=>{
                    return(

                        <div className='col-lg-3 mb-4' key={index}>
                        <div className='bg-light p-3 rounded text-center'>
                            <h4> {pdata.pname} </h4>
                            <img src={pdata.photo}className='img-fluid rounded mt-2 mb-2'/>
                            <p>The {pdata.details}</p>
                            <p>Price Rs. {pdata.price} </p>

                            <button className='btn btn-info btn-sm'> 
                            <i className='fa fa-shopping-cart' 
                            onClick={addtocart.bind(this, pdata)}> Add to cart </i> 
                            </button>

                        </div>
                    </div>

                    )
                })
            }
           

           
        </div>
     </div>
    </>
  );
}

export default Home ;
