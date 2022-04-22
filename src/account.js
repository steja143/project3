import React, {useState} from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom';

const Account=()=>{

    const [name, pickname]=useState("");
    const [email, pickemail]=useState("");
    const [password, pickpassword]=useState("");
    const [mobile, pickmobile]=useState("");
    const [message, updatemessage]=useState("");
    

    const register=()=>{
        var newuser={
      "name": name,
      "email": email,
      "password": password,
      "mobile": mobile
        };
    
    var url= "http://localhost:1234/vendor";
        axios.post(url, newuser)
        .then(response=>{
            updatemessage(name + " Registred Successfully..!");
            pickemail("");
            pickmobile("");
            pickname("");
            pickpassword("");
        })
    }

const[username, pickUsername]=useState("");
const[userpass, pickUserpass]=useState("");
const[loginmsg, updatemsg]=useState("");

const gologin=()=>{
    var loginstatus=false;
    updatemsg("Please Wait Processing..");
    //alert(username + userpass);
    var url= "http://localhost:1234/vendor";
    axios.get(url).then(response=>{
        let alluser=response.data;
        for(var i=0;i<alluser.length;i++){
            if(alluser[i].email==username && alluser[i].password==userpass){
                updatemsg("Success: Redirecting..");
                loginstatus=true;
                //alert(updatemsg("User Exists"));
                localStorage.setItem("name", alluser[i].name); //the local storage will store data in browser which we can access in other pages too
                localStorage.setItem("vendorid", alluser[i].id);
                localStorage.setItem("mobile", alluser[i].mobile);
                window.location.href="http://localhost:3000/ #/order";
                break; //to break the loop
            }
        }//forloop end
        if(loginstatus==false){
            updatemsg("Invalid Account or not Exist..!");
        }
  
    })
}


    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 text-center text-info mb-3'>
                    <h3>Vendor Account</h3>
                    <p><Link to ="../"> Back to Home</Link> </p>
                </div>
            <div className='col-lg-2'></div>
            <div className='col-lg-3'>
                <div className='card'>
                    <div className='card-header text-center bg-danger text-white shadow'> Login </div>
                    <p>{loginmsg}</p>
                    <div className='card-body'>
                        <div className='mb-2'>
                            <label>E-mail Id</label>
                            <input type="text" className='form-control mb-2' 
                            onChange={obj1=>pickUsername(obj1.target.value)}/>
                            <label>Password</label>
                            <input type="password" className='form-control'
                            onChange={obj1=>pickUserpass(obj1.target.value)}/>
                        </div>
                    </div>
                    <div className='card-footer bg-danger text-center'>
                        <button className='btn btn-primary' onClick={gologin}> Login </button>
                    </div>

                </div>
            </div>


            <div className='col-lg-1'></div>
            
            <div className='col-lg-3'>
                <div className='card text-dark'>
                    <div className='card-header text-center bg-warning'>
                        Register Account
                    </div>

                    <div className='card-body'>
                        <div className='mb-2'>
                            <label> Vendor Name</label>
                            <input type="text" className='form-control'
                             onChange={obj=>pickname(obj.target.value)} value={name}/>
                            <label>Enter Email </label>
                            <input type="email" className='form-control'
                            onChange={obj=>pickemail(obj.target.value)} value={email} />
                            <label>Password </label>
                            <input type="password" className='form-control' 
                            onChange={obj=>pickpassword(obj.target.value)} value={password} />
                            <label>Enter Mobile Number</label>
                            <input type="number" className='form-control'
                            onChange={obj=>pickmobile(obj.target.value)} value={mobile} />
                            
                        </div>
                        <p className='m-1 p-1 text-danger'>{message}</p>
                    </div>

                    <div className='card-footer text-center bg-warning'>
                    <button className='btn btn-primary' onClick={register}> Register </button>
                    </div>

                </div>

            </div>

            <div className='col-lg-2'></div>

            </div>
        </div>
    )
}
export default Account;