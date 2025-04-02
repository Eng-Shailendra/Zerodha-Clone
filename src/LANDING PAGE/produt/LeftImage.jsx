import React from "react";
function LeftImage({
  imageUrl,
  productName,
  productDescription,
  linkName1,
  linkName2,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="product-kit ">
              <div className="col-6 p-3">
                <img src={imageUrl} alt="" />
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 p-5 mt-5 ">
            <h1 className="fs-2 p-2">{productName}</h1>
            <p className=" p-2 text-muted">{productDescription}</p>
            <div className="p-2 ">
              <a href={linkName1}>
                {linkName1}
                <i class="bi bi-arrow-right"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="" href={linkName2}>
                {linkName2}
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="p-3 " style={{ whiteSpace: "nowrap" }}>
              <a className="p-2" href={googlePlay}>
                <img src="assets/Media/googlePlayBadge.svg" alt="" />
              </a>
              <a className="p-2" href={appStore}>
                <img src="assets/Media/appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="product-kit "></div>
        </div>
      </div>
    </>
  );
}

export default LeftImage;
