import React, { useEffect, useState } from "react";

function Footer(props) {
  const [menu, setMenu] = useState(props.menu);

  return (
    <div id="footer">
      <div className="footerWrap">
        <div className="contBox">
          <div className="menuBox">
            <ul>
              {
                menu.map(function(item,index){
                  return(
                    <li className={"menu_" + (index + 1) + " menu"} key={(index+1)}><a href="">{item}</a></li>
                  );
                })
              }
            </ul>
          </div>
          <div className="contactBox"></div>
        </div>
        <p className="copyright"><span>(주) 피터패트</span><span>COPYRIGHT EBIZVILLE. ALL RIGHTS RESERVED.</span></p>
      </div>
    </div>
  );
}

export default Footer;
