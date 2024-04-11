import { useEffect } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import '../styles/navbar.css';
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoMdArrowDropup } from "react-icons/io";



export default function navbar() {
    const [navlinks, setnavlinks] = useState([]);
    const [dropdown, setdropdown] = useState(false)
    useEffect(() => {
        const navts = [{name: "appliance", path: '/appliances'},
        {name: "furniture", path: '/furniture'},
        {name: "electronic", path: '/electronic'},
        {name: "services", path: '/services'}
    ];
    setnavlinks(navts);
    }, [])
    const [open, setOpen] = useState(false);
    const style = {
        display: 'flex',
        height: '400px'
    }
    const menue = (e) => {
        e.preventDefault();
        setOpen(!open);
    }
    
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
         // Navigate to the selected option
    };
    const styyle = {
        display: "flex"
    }
  return (
    <>
    <div className='top-navbar-parent bg-slate-800 text-white flex py-4'>
        <div className='top-navbar-content'>
            <div className='top-nav-cal-email-div'>
                <a href="tel:+971565239210"><p className=' text-yellow-700'><IoCall /></p> +971 56 523 9210</a>
                <a href="mailto:info@free-junkremoval.com"><p className='text-yellow-700'><MdEmail /></p> info@free-junkremoval.com</a>
            </div>
            <div className='top-nav-icons-dev'>
                <a href=""><FaFacebookSquare /></a>
                <a href=""><FaInstagramSquare /></a>
                <a href=""><FaXTwitter /></a>
                <a href=""><FaYoutube /></a>
            </div>
        </div>
    </div>
    {/* ////// start bottom navbar /////// */}
    <div className='bottom-navbar-div flex mt-4 pb-3 items-center justify-center'>
        <div className='bottom-navbar-content'>
            <div className='bottom-nav-logo'>
                <img src="./images/logo.png" alt="" />
            </div>
            <div className='bottom-nav-links'>
                <div className='bottom-links'>
                <Link to={'/'}>
                    <a href="" className=' text-yellow-500'>Home</a>
                    </Link>
                    <Link to={'/about'}>
                    <a href="">About</a>
                    </Link>
                    <a href="" className='flex justify-center text-center' onClick={(e) => {
                        e.preventDefault()
                        setdropdown(!dropdown)
                    } } id='text-center'>
                       Services {dropdown ? <IoMdArrowDropup />:<IoMdArrowDropdown /> }
                    </a>
                    <Link to={'/contact'}>
                    <a href="">Contact</a>
                    </Link>
                    <a href="" id='search' className=' font-bold'><CiSearch /></a>
                    <div className='drop-down bg-blue-500' style={dropdown ? styyle: {} }>
                        <Link to={'/junk-removal-services-dubai'}>
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Appliances</a>
                        </Link>
                        <Link to={'/electronic'}>
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Electronic</a>
                        </Link>
                        <Link to={'/furniture'}>
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Furniture</a>
                        </Link>
                        <Link to={'/services'}>
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Services</a>
                        </Link>
                    </div>

                </div>
                <div className='bottom-logos-search'>
                    <a href="" onClick={menue}>{open ? <RxCross1 /> :<RxHamburgerMenu /> }</a>
                    <a href=""><CiSearch /></a>
                </div>
            </div>
        </div>
    </div>
    {/* /////// mobile navbar ///// */}
    <div className='mb-icons  bg-slate-700 text-white' style={open ? style: {}}>
                <div className='bottom-mb-links py-15'>
                <Link to={'/'}>
                    <a href="" className=' py-3' onClick={()=> setOpen(!open)}>Home</a>
                    </Link>
                    <Link to={'/about'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>About</a>
                    </Link>
                    <Link to={'/services'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Services</a>
                    </Link>
                    <Link to={'/furniture'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Furniture</a>
                    </Link>
                    <Link to={'/electronic'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Electronics</a>
                    </Link>
                    <Link to={'/junk-removal-services-dubai'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Appliances</a>
                    </Link>
                    <Link to={'/contact'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Contact</a>
                    </Link>
                </div>
                </div>
    </>
  )
}
