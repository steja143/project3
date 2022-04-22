import React from 'react';
import {Link} from 'react-router-dom';

const MyHeader =()=>{
    return(
        <div className='container mt-3'>

            <div className='row'>

                <div className='col-lg-4 text-center'>
                    <i className='fa fa-shopping-cart fa-3x text-warning'> Shopping.. </i>
                </div>

                <div className='col-lg-8 text-end'>
                    <div className='btn-group'>
                        <Link to = "/" className='btn btn-primary  pe-5 ps-5'> <i className='fa fa-home'></i> Home </Link>
                        <Link to="/" className='btn btn-primary pe-5 ps-5 '> <i className='fa fa-suitcase'></i> Shopping </Link>
                        <Link to = "/cart" className='btn btn-primary pe-5 ps-5'>  <i className='fa fa-shopping-bag'></i> My Cart </Link>
                        <Link to = "/account" className='btn btn-primary pe-5 ps-5'>  <i className='fa fa-user'></i> Vendor </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default MyHeader;