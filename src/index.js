// let's go!
import React from 'react';
import {render} from 'react-dom'; //importing only rendor method from react-dom package
import StorePicker from './components/StorePicker'; //import StorePicker component we created
import App from './components/App'; //...App component
import './css/style.css'; //import styles Wes provided

//create component ES6

render(<StorePicker/>, document.querySelector('#main'));
render(<App/>,document.querySelector('#main'));
