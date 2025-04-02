import React from "react";
function RightImage({ imageUrl, productName, productDescription, linkName1 }) {
  return (
    <>
      <div className="container mt-5">
        <div className="row item-center">
          <div className="col-4 p-5 mt-5 ">
            <h1 className="fs-2 p-2">{productName}</h1>
            <p className=" p-2 text-muted">{productDescription}</p>
            <div className="p-2 ">
              <a href={linkName1}>
                {linkName1}
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-7 right-img">
            <div className="">
              <img src={imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightImage;
