import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import '../styles/sticky.css'
export default function sticky() {
  return (
    <>
    <div className='flex main-stick'>
    <div className='main-sticky'>
        <a href="tel:+971565239210"><IoIosCall /></a>
        <a href="https://wa.me/+971565239210"><IoLogoWhatsapp /></a>
    </div>
    </div>
    </>
  )
}
