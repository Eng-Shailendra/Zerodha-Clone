import React from 'react';
function Education() {
    return ( 
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 ml-5 p-5">
                    <img  src="assets/Media/education.svg" className='' style={{width: "100%"}} alt="" />
                </div>
                <div className='col-6 '>
                    <div className="ml-5 p-5">
                        <h2 className='mb-3 row'>Free and open market education</h2>
                        <p className='mb-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="#" className='' style={{textDecoration: "none"}}>Varsity  <i class="bi bi-arrow-right"></i></a><br /><br />
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="#" className='' style={{textDecoration: "none"}}>Seening pricing <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Education;