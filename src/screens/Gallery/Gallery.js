import React, { useRef } from "react";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/3.jpg";
import Image4 from "../../assets/4.jpg";
import Image5 from "../../assets/5.jpg";
import Image6 from "../../assets/6.jpg";


function Gallery() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <section>
      <div class="container-fluid">
        <div class="row" style={{ width: "100%" }}>
          <div class="col-sm-3">
            <img
              alt={"Not available"}
              src={Image1}
              style={{
                width: "100%",
                height: windowSize.current[1] / 3,
              }}
            />
          </div>
          <div class="col-sm-3">
            <img
              alt={"Not available"}
              src={Image2}
              style={{
                width: "100%",
                height: windowSize.current[1] / 3,
              }}
            />
          </div>
          <div class="col-sm-3">
            <img
              alt={"Not available"}
              src={Image3}
              style={{
                width: "100%",
                height: windowSize.current[1] / 3,
              }}
            />
          </div>
          <div class="col-sm-3">
            <img
              alt={"Not available"}
              src={Image4}
              style={{
                width: "100%",
                height: windowSize.current[1] / 3,
              }}
            />
          </div>
        </div>

        <div class="row" style={{ width: "100%" }}>
          <div class="col-sm-3">
            <img
              alt={"Not available"}
              src={Image5}
              style={{
                width: "100%",
                height: windowSize.current[1] / 3,
              }}
            />
          </div>
          <div class="col-sm-3">
            <img
              alt={"Not available"}
              src={Image6}
              style={{
                width: "100%",
                height: windowSize.current[1] / 3,
              }}
            />
          </div>
         
        
        </div>

       
      </div>
    </section>
  );
}
export default Gallery;
