// let's go!
import React from 'react';
import {render} from 'react-dom'; //importing only rendor method from react-dom package
import {BrowserRouter, Match, Miss} from 'react-router'; //router is a component
 
import App from './components/App'; //...App component
import './css/style.css'; //import styles Wes provided
import StorePicker from './components/StorePicker'; //import StorePicker component we created
import NotFound from './components/NotFound';

const Root = () => {
    return(
        <BrowserRouter>
        
        {/*Match cannot be direct child of BrowserRouter, therefore wrapped in div*/}
          <div>
              <Match exactly pattern="/" component={StorePicker}/>{/*When on homepage, determine component to show*/}
            <Match pattern="/store/:storeId" component={App}/>{/*When on store, determine which store*/}
            <Miss component={NotFound}/>
          </div>
        </BrowserRouter>
        )
}


render(<Root/>,document.querySelector('#main'));
