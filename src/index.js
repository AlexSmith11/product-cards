import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import './fonts/GillSansMTStd-Light.woff2';
import './fonts/GillSansMTStd-Medium.woff2';
import './fonts/TimesDigitalW04-Regular.woff2';
import './fonts/TimesModern-Light.woff2';
import './fonts/TimesModern-Regular.woff2';

import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/cards'

ReactDOM.render(<Cards />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
