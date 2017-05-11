import React from 'react';

class Header extends React.Component {
    
    render(){
        {/* this -> component, props -> object, tagline -> key of the object*/}
        return(
                 <header className="top">
                    <h1>Catch of the Day</h1>
                    <h3 className="tagline">{this.props.tagline}</h3>
                 </header>
            )
    }
}

export default Header;