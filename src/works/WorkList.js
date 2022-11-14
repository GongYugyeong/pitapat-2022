import React, { useState, useEffect } from "react";
import Data from "../data/Works.json";

function WorkList(){
  const [works,setWorks] = useState(Data);

  return (
    <div className="workList">
      {
        works.map(function(item,index){
          return (
            <div className={"list list_"+(index+1)} key={index+1}>
              <div className="cont">
                <p className="title">{item.title}</p>
                <video loop="true" muted="true" autoplay="true" preload="auto">
                  <source src={"./assets/images/cont_list_img_"+item.idx+".mp4"} type="video/mp4" />
                </video>
                <p>{item.sub}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default WorkList;