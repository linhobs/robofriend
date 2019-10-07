import React from 'react';//view Library, core of the package that does manipulations for us
import ReactDOM from 'react-dom';//used for DOM
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import App from './App'//one big father to hold all our children components

ReactDOM.render(
                <App/>
    
    , document.getElementById('root')); //equiv to page in angular 

 
serviceWorker.unregister();
