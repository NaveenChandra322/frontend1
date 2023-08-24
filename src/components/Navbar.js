import React from 'react'
import iomplogo from '../images/iomplogo.jpg'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-md h-5 py-1 fixed-top" style={{backgroundColor:'#eeeeee'}}>
        {/* <a className="navbar-brand" href="#">{iomplogo}</a> */}
        <img src={iomplogo} alt="Image" style={{height:'8vh', width:'5vw',paddingRight:'10px'}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link pl-4 pr-4" style={{color:'#4455a4', fontWeight:'bold', fontSize:'22px'}} href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link pl-4 pr-4" style={{color:'#4455a4', fontWeight:'bold', fontSize:'22px'}} href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link pl-4 pr-4" style={{color:'#4455a4', fontWeight:'bold', fontSize:'22px'}} href="#">Working</a>
            </li>
            <li className="nav-item">
                <a className="nav-link pl-4 pr-4" style={{color:'#4455a4', fontWeight:'bold', fontSize:'22px'}} href="#">Contact Us</a>
            </li>
            
            </ul>
            <form className=" my-2 my-lg-0 pr-3">
                <button className="btn my-2 my-sm-0" style={{backgroundColor:'#4455a4',color:'#eeeeee', fontWeight:'bold', fontSize:'22px'}} type="submit">Login</button>
            </form>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
