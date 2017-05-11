import React from 'react';
import {getFunName} from '../helpers';


class StorePicker extends React.Component {
    //use constructor to bind our method to our component  
    // constructor(){
    //     super();
    //     this.goToStore = this.gotToStore.bind(this);
    // }
    
    goToStore(event){
        event.preventDefault();
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
        //get text from box
        //update url to store id
    }
    //every component needs a minimum of a render method
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
            {/*Or like this: {(e) => this.gotToStore(e)}*/}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>{/*mehtod in helper file prepopulates store name/id */}
                <button type="submit"> Visit Store --></button>
            </form>
            )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;