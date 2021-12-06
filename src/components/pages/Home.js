import React, { useState } from 'react'
import Product from '../Product'
import './Home.css'

function Home() {
    
    return (
        <div>
            <img 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            className="home__image" 
            alt="image" />
            <div className="home__products">
                <Product
                    id="1" 
                    title="Anker Roav Jump Starter Pro Emergency Portable Charger with Advanced Safety Protection" 
                    price={777} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/41jrNEOZVPL._AC_.jpg"
                />
                <Product
                    id="2" 
                    title="Samsung Galaxy A52s Dual SIM - 256GB, 8GB RAM, 5G, Black" 
                    price={400} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/51-pDmPnusL._AC_.jpg"
                />
            </div>
            <div className="home__products">
                <Product
                    id="3" 
                    title="HP Pavilion 15-ec1009nia Gaming Laptop - Ryzen 7 4800H 8-Cores, 16 GB RAM , 1TB HDD + 256GB SSD"
                    price={1500} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/71DBBqrA8mL._AC_SL1500_.jpg"
                />
                <Product
                    id="4" 
                    title="Black & Decker DCM25N-B5 Coffee Maker, Black - 1 Cup" 
                    price={100} 
                    rating={3} 
                    image="https://m.media-amazon.com/images/I/61caRAyvc-L._AC_SL1500_.jpg"
                />
                <Product
                    id="5" 
                    title="Apple AirPods Pro, White - MWP22ZE/A" 
                    price={500} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/31IE9Ge6+EL._AC_.jpg"
                />
            </div>
            <div className="home__products">
                <Product
                    id="6" 
                    title="Samsung 40 inch Full HD Smart TV with Built-in Receiver UA40T5300AUXEG - Black" 
                    price={800} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/51VPVVShfvS._AC_SX425_.jpg"
                />
            </div>
        </div>
        
    )
}

export default Home
