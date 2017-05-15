import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    
    constructor(){
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        //getInitialState
        this.state = {
            fishes:{},
            order: {}
        };
    }
    
    addFish(fish){
        //update state
        const fishes = {...this.state.fishes}; //using spread to make a copy of current state
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //tell react that state has been updated
        this.setState({fishes});
    }
    
    loadSamples(){
        this.setState({
            fishes: sampleFishes
        });
    }
    
    render(){
    {/*One method that is always needed on a component: render*/} 
        return(
            
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline ="Fresh Seafood Market"/>
                </div>
            <Order/>
            <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
            
            
            )
    }
    
}

export default App;