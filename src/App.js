import React, { useEffect, useState } from "react";
import Header from './inc/Header';
import Footer from './inc/Footer';
import Main from './main/Main';

function App() {
  const [menu, setMenu] = useState(["Works", "About", "Career", "Inquire"]);

  return (
    <div id="wrapper">
      <Header menu={menu} />
			<div id="wrap">
        <Main />
      </div>
      <Footer menu={menu} />
    </div>
  );
}

export default App;
