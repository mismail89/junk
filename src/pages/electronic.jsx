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
                <h1>Electronics Junk Removal Service</h1>
                <p>In a city known for its technological advancements and modern living, keeping pace with innovation is essential. If outdated or malfunctioning electronics clutter your home or office in Dubai, Junk Removal Service is your trusted partner for Electronics Junk Removal services. Our specialized team ensures a seamless and responsible disposal process, making room for the latest in technology and efficiency.</p>
            </div>
        </div>
    </div>
    
    <div className='card-header-parent flex'>
        <div className='main-card-header'>
            <h3>ELECTRONIC JUNK REMOVAL SERVICES</h3>
            <h1>We Provide Best Services</h1>
            <p>In the heart of Dubai, where technology thrives and innovation is celebrated, upgrading your electronic devices is a natural step towards a modern lifestyle. When it's time to bid farewell to outdated or malfunctioning electronics, look no further than Junk Removal Service. Our Electronic Junk Removal services are tailored to seamlessly transition your space into a clutter-free haven of technological advancement.</p>
            <div></div>
        </div>
    </div>
    <div className='main-cart-parent-div flex' >
        <div className='main-cart-div'>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/el1.jpg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Household Electronics Removal</h1>
                    <p>Elevate your living space effortlessly by entrusting us with the removal of outdated or non-functional household electronics. From old TVs and gaming consoles to computers and audio equipment, we ensure a swift transition to a more modern and efficient home.</p>
                    <a href="tel:+971565239210">Book Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/el2.jpg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Office Electronics Disposal</h1>
                    <p>Streamline your office environment by removing obsolete or surplus electronics. Our team efficiently handles the removal of old computers, printers, servers, and other electronic equipment, creating room for a more organized and technologically advanced workspace.</p>
                    <a href="tel:+971565239210">Call Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/apl2.webp" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Bulk Electronics Pickup</h1>
                    <p>Whether you're upgrading your home entertainment system, renovating your office, or simply decluttering on a larger scale, our bulk electronics pickup service caters to your specific needs. We efficiently handle large volumes of electronic removal, providing a comprehensive solution for your project.</p>
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
