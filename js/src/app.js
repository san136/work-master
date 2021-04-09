import { render } from "react-dom";

import Layout from "./components/Layout";
import PortfolioList from "./components/PortfolioList";
// import MyInlineWeb from "./components/Webview"
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

// render(<MyInlineWeb />,document.querySelector('#app'));
// render(<PortfolioList />,document.querySelector('#app'));
render(<Layout />, document.querySelector("#app"));
