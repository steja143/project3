

import React from 'react';
import {Link} from 'react-router-dom';

if(localStorage.getItem("vendorid")===null){  // this if conditon is to avoide the access to vendor page view before login if tries from url  
    window.location.href="http://localhost:3000/#/account";
   // window.location.reload();// This is to after going to the account page it should reload the page
}

const AdminHeader =()=>{

    return(
        <div className='container mt-3'>

            <div className='row'>

                <div className='col-lg-4 text-center'>
                    <i className='fa fa-shopping-cart fa-3x text-warning'> Shopping.. </i>
                </div>

                <div className='col-lg-8 text-end'>
                    <div className='btn-group'>
                        <Link to = "/Myproduct" className='btn btn-primary  pe-5 ps-5'> <i className='fa fa-home'></i> Manage Products </Link>
                        <Link to="/order" className='btn btn-primary pe-5 ps-5 '> <i className='fa fa-suitcase'></i> Manage Orders </Link>
                        <button className='btn btn-primary pe-5 ps-5'> Welcome - {localStorage.getItem("name")} <i className='fa fa-power-off tex-danger' onClick={logout}>  Logout</i> </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default AdminHeader;

const logout=()=>{
    localStorage.clear();
    window.location.href="http://localhost:3000/ #/account";
}