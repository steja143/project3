import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from './adminheader.js';


function Manageproduct() {
    const [productlist, updateProduct]=useState([]);

    const getProduct=()=>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            updateProduct(response.data)
        })
    }

    useEffect(()=>{
        getProduct();
    },[1])

    const [itemname, pickitem]=useState("");
    const [itemprice, pickprice]=useState("");
    const [itemphoto, pickphoto]=useState("");
    const [itemdetails, pickdetails]=useState("");
    const [message, updatemessage]=useState("");

    const save=()=>{
        var newitem={
      "pname": itemname,
      "price": itemprice,
      "photo": itemphoto,
      "details": itemdetails
        };
    
    var url= "http://localhost:1234/product";
        axios.post(url, newitem)
        .then(response=>{
            updatemessage(itemname + " Saved Successfully..!");
            pickitem("");
            pickprice("");
            pickphoto("");
            pickdetails("");
           
            getProduct();

        })
    }

    const deleteproduct=(id)=>{
        axios.delete("http://localhost:1234/product/"+id)
        .then(response=>{
            updatemessage(message + " Deleted..!");
        })
        getProduct();
    }


    return(
        <>
            <AdminHeader/>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='p-4 shadow'>
                            <h4 className='text-center text-primary'> Add New Product </h4>
                           
                            <div className='mb-3'>
                                <label>Product Name </label>
                                <input type="text" className='form-control'
                                onChange={obj=>pickitem(obj.target.value)} value={itemname}/>
                            </div>

                            <div className='mb-3'>
                                <label>Price </label>
                                <input type="number" className='form-control'
                                onChange={obj=>pickprice(obj.target.value)} value={itemprice}/>
                            </div>

                            <div className='mb-3'>
                                <label>Product Photo </label>
                                <input type="text" className='form-control'
                                onChange={obj=>pickphoto(obj.target.value)} value={itemphoto}/>
                            </div>

                            <div className='mb-3'>
                                <label> Product Details </label>
                                <textarea className='form-control' 
                                onChange={obj=>pickdetails(obj.target.value)} value={itemdetails}>     
                                </textarea>
                            </div>

                            <div className='text-center'>
                                <button className='btn btn-primary btn-lg' onClick={save}> Save Product </button>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-9'>
                         <div className='p-2 shadow'>
                            <h4 className='text-center text-primary'> {productlist.length} : Manage Products </h4>
                            <p className='text-center text-Success'> {message} </p>
                            <table className='table table-bordered table-hover shadow'>
                                <thead>
                                    <tr className='bg-light text-primary'>
                                        <th> Id </th>
                                        <th> Name </th>
                                        <th> Price </th>
                                        <th> Photo </th>
                                        <th> Details </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productlist.map((product, index)=>{
                                            return(
                                                    <tr key={index}>
                                                        <td>{index}</td>
                                                        <td>{product.pname}</td>
                                                        <td>{product.price}</td>
                                                        <td>
                                                            <img src={product.photo} height="50" width="70"/>
                                                        </td>
                                                        <td> {product.details} </td>
                                                        <td>
                                                            <button className='btn btn-danger btn-sm' onClick={deleteproduct.bind(this,product.id)}>
                                                                <i className='fa fa-trash'></i>
                                                            </button>
                                                        </td>
                                                        
                                                    </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Manageproduct;