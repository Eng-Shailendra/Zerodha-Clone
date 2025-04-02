import React from 'react';
function Awards() {
    return ( 

        <>
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-6">
                    <img src="assets/Media/largestBroker.svg" alt="Largest Broker picture" />
                </div>
                <div className="col-6">
                    <h1>Largest stock broker in India</h1>
                    <p className='mt-3'>2+ million customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stock & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and  Goverment securties</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="assets/Media/pressLogos.png" className='mt-5 mb-5' style={{width: "100%"}} alt="press Logo" />

                </div>
            </div>
        </div>
        </>
    );
}

export default Awards;