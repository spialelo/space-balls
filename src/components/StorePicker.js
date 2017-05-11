import React from 'react';

//create component ES6
class StorePicker extends React.Component {
    //ever component needs a minimum of a render method
    render(){
         {/*Commenting example in jsx - do top level or within element tag you are returning b/c you can return more than one element with render*/}
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit"> Visit Store --></button>
            </form>
            )
    }
}

export default StorePicker;