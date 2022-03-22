import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/App.scss";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

reportWebVitals()
