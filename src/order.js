
import React,{useState, useEffect} from 'react';
import axios from 'axios';

import AdminHeader from './adminheader.js';

function Myorder() {

    const [orderlist, updateorder]=useState([]);

    const getorder=()=>{
        axios.get("http://localhost:1234/order")
        .then(response=>{
            updateorder(response.data.reverse());//reverse function is used to display the latest order at first
        })
    }

    useEffect(()=>{
        getorder();
    },[1]);

    return(
        <>
            <AdminHeader/>

            <div className='container mt-5'>

                {
                    orderlist.map((order, index)=>{
                        return(
                        <div className='row mb-5 shadow' key={index}>
                            <div className='col-lg-4'>
                                <div className='p-4'>
                                    <h6 className='text-center text-primary'> Customer Details </h6>
                                    <p>Full Name : {order.customername}</p>
                                    <p>Full Name : {order.mobileno}</p>
                                    <p>Full Name : {order.emailid}</p>
                                    <p>Full Name : {order.address}</p>
                                </div>
                            </div>

                            <div className='col-lg-8'>
                                <div className='p-2'>
                                    <h6 className='text-center text-primary'>Orders Details </h6>

                                    <table className='table table-bordered table-hover'>
                                        <thead>
                                            <tr className='table-sm text-primary'>
                                                <th> Id </th>
                                                <th> Name </th>
                                                <th> Price </th>
                                                <th> Photo </th>
                                                <th> Details </th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                order.myproduct.map((product, index2)=>{
                                                    return(
                                                        <tr key={index2}>
                                                            <td> {product.id} </td>
                                                            <td> {product.pname} </td>
                                                            <td> {product.price} </td>
                                                            <td>
                                                                <img src={product.photo} height="50" width="80"/>
                                                            </td>
                                                            <td> {product.details} </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                )
            })
        }
            </div>

        </>
    )
}
export default Myorder;