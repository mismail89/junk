import React from 'react'
import Tick from '../components/tick'
import Cart from '../components/cart';
import Cardheader from '../components/cardheader';
import Icons from '../components/icons';

export default function services() {

    const stylee = {
        backgroundImage: 'url(./images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: ' rgba(255, 0, 0, 1);'
        }
  return (
    <>
    <div className='icon-part-hero' style={stylee}>
        <div className='icon-hero'>
            <div className='icon-part-text'>
                <h1>Furniture Junk Removal Service</h1>
                <p>Your go-to destination for Furniture Junk Removal services. Our specialized team is dedicated to seamlessly decluttering your surroundings, providing a hassle-free solution for disposing of unwanted or outdated furniture. Explore the range of services we offer to create a stylish, modern, and comfortable environment.</p>
            </div>
        </div>
    </div>
    
    <div className='card-header-parent flex'>
        <div className='main-card-header'>
            <h3>FURNITURE JUNK REMOVAL SERVICES</h3>
            <h1>We Provide Best Services</h1>
            <p>Embarking on a journey to revitalize your living or working space in the vibrant city of Dubai? Look no further than Furniture Junk Removal Service In Dubai, your trusted partner for Furniture Junk Removal services. Our dedicated team is committed to seamlessly decluttering your surroundings, providing a hassle-free solution for disposing of unwanted or outdated furniture. Explore the range of services we offer to turn your space into a modern haven of comfort and style.</p>
            <div></div>
        </div>
    </div>
    <div className='main-cart-parent-div flex' >
        <div className='main-cart-div'>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/sf1.webp" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Office Furniture Removal Service</h1>
                    <p>If outdated or surplus furniture is hindering your office's potential, it's time to partner with Junk Removal Service, your go-to solution for Office Furniture Removal services. Our dedicated team specializes in streamlining workspaces, allowing you to create a modern, efficient, and inspiring environment for your team.</p>
                    <a href="tel:+971565239210">Book Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/sf2.webp" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Home Furniture Removal Service</h1>
                    <p>Look no further than junk removal service in dubai, your trusted partner for Home Furniture Removal services in Dubai. Our dedicated team specializes in providing hassle-free solutions for removing outdated, unwanted, or surplus furniture, allowing you to create the home environment of your dreams.</p>
                    <a href="tel:+971565239210">Call Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/sf3.webp" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Villas Furniture Removal Service</h1>
                    <p>Look no further than Junk Removal Service In Dubai , your dedicated partner for Villa Furniture Removal services. Our specialized team understands the unique requirements of villa living and offers tailored solutions to seamlessly declutter your space, allowing you to create an environment of luxury and comfort.</p>
                    <a href="tel:+971565239210">Call Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/apl3.jpg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Effortless Appliance Removal</h1>
                    <p>From refrigerators and washing machines to ovens and dryers, we tackle all major appliances, regardless of size, weight, or condition. Our experienced team carefully disconnects and removes your unwanted appliances, ensuring minimal disruption to your property.</p>
                    <a href="tel:+971565239210">Book Now</a>
                </div>
            </div>
        </div>
    </div>
    <Icons />
    </>
    
  )
}
