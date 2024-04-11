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
                <h1>Appliances Junk Removal Service</h1>
                <p>In the bustling and innovative city of Dubai, staying on the cutting edge of technology and style is paramount. If old, dysfunctional, or surplus appliances are impeding the efficiency and aesthetics of your space, look no further than junk removal service in dubai. Our specialized Appliances Junk Removal service is crafted to seamlessly clear out unwanted appliances, ushering in a new era of contemporary living or working in the heart of Dubai</p>
            </div>
        </div>
    </div>
    
    <div className='card-header-parent flex'>
        <div className='main-card-header'>
            <h3>What we offer</h3>
            <h1>We Serve Quality Free Junk Removal Service</h1>
            <p>Free Junk Removal Company is one of the best junk removal company that provides the best service to its valued customers. We offer up extensive services like:</p>
            <div></div>
        </div>
    </div>
    <div className='main-cart-parent-div flex' >
        <div className='main-cart-div'>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/cart1.jpeg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Junk Furniture Removal Dubai</h1>
                    <p>Whether you're clearing out a single room or an entire property, our furniture removal services can be customized to meet your specific requirements.</p>
                    <a href="tel:+971565239210">Book Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/apl1.jpg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Residential and Commercial Solutions</h1>
                    <p>Our appliance removal services cater to both residential and commercial clients. Whether you're upgrading your kitchen at home or renovating a commercial space, we provide comprehensive solutions.</p>
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
                    <h1>24/7 Appliance Pickup</h1>
                    <p>Ditch the scheduling stress! We offer flexible pickups 24/7, catering to your needs and respecting your valuable time. Need a midnight appliance exodus? We're ready!
Ditch the scheduling stress! We offer flexible pickups 24/7, catering to your needs and respecting your valuable time. Need a midnight appliance exodus? We're ready!</p>
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
