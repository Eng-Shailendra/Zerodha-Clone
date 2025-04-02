import React from 'react';
function Pricing() {
    return ( 
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-4 ml-5 p-5">
                    <h2 className='mb-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" className='mx-5' style={{textDecoration: "none"}}>Seening pricing <i class="bi bi-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className="row text-center">
                        <div className='col p-5 border'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className='col p-5 border'>
                            <h1>₹20</h1>
                            <p>Intraday  and  F&O</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </>
     );
}

export default Pricing;