
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import MyHeader from './header.js';

function Mycart() {

    const [product, updateProduct]=useState([]);

    const getproduct=()=>{
        axios.get("http://localhost:1234/cart")
        .then(response=>{
            updateProduct(response.data);
        })
    }

    useEffect(()=>{
        getproduct();
    })



    const[message, updatemessage]=useState();

    const delitem =(pid)=>{
    axios.delete("http://localhost:1234/cart/"+pid)
    .then(response=>{
        updatemessage("item deleted..!");
    })
    }

    const[customer, pickCustomer]=useState("");
    const[email, pickEmail]=useState("");
    const[mobile, picMobile]=useState("");
    const[address, picAddress]=useState("");

    const placeorder =()=>{
        //alert("ok");
        var myorder={
            myproduct:product,//here product is multi dimension array
            customername:customer,
            mobileno:mobile,
            emailid:email,
            address:address
        };

        var url="http://localhost:1234/order";
        axios.post(url, myorder)
        .then(response=>{
            updatemessage("Your Order Placed Successfully..!");
        })
    }

    return(
        <>
            <MyHeader/>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='p-4 shadow'>
                            <h4 className='text-center text-primary'>Customer Details </h4>
                           
                            <div className='mb-3'>
                                <label>Customer Name </label>
                                <input type="text" className='form-control' onChange={obj1=>pickCustomer(obj1.target.value)}/>
                            </div>

                            <div className='mb-3'>
                                <label>Mobile Number </label>
                                <input type="number" className='form-control' onChange={obj1=>picMobile(obj1.target.value)}/>
                            </div>

                            <div className='mb-3'>
                                <label>Email Id </label>
                                <input type="email" className='form-control' onChange={obj1=>pickEmail(obj1.target.value)} />
                            </div>

                            <div className='mb-3'>
                                <label> Delevery Address </label>
                                <textarea className='form-control' onChange={obj1=>picAddress(obj1.target.value)}></textarea>
                            </div>

                            <div className='text-center'>
                                <button className='btn btn-primary btn-lg' onClick={placeorder}> Place Order </button>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-9'>
                         <div className='p-4 shadow'>
                            <h4 className='text-center text-primary'>Items in Cart </h4>
                            <p className='text-center'> {message} </p>

                            <table className='table table-bordered table-hover shadow'>
                                <thead>
                                    <tr className='bg-light text-primary'>
                                        <th> Product Id </th>
                                        <th> Product Name </th>
                                        <th> Price </th>
                                        <th> Photo </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((pinfo, index)=>{
                                          return(
                                            <tr key ={index}>
                                                <td> {pinfo.id} </td>
                                                <td> {pinfo.pname} </td>
                                                <td> {pinfo.price} </td>
                                                <td> <img src={pinfo.photo} height="50" width="70"/> </td>
                                                <td> 
                                                    <button className='btn btn-danger btn-sm text-white' onClick={delitem.bind(this, pinfo.id)}> 
                                                    <i className='fa fa-trash'></i> </button>
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
    );
}
export default Mycart;