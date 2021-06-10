import React from "react";
import Lifecycle_methods from "./Lifecycle_methods"; 

export default class Lifecycle_methods_1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            mount : true,
            ignoreProp : 0,
            seed : 40
        }
    }
    mountCounter = () => {
        this.setState({mount : true});
    }
    unmountCounter = () => {
        this.setState({mount : false});
    }
    ignoreCase = () => {
        this.setState({ignoreProp : this.state.ignoreProp+1});
    }
    seedGenerator = () => {
        this.setState({seed : Number.parseInt(Math.random()*100)});
    }

    render(){
        return(
            <div className="text-center">
                <button className="btn-lg" disabled={this.state.mount} onClick={this.mountCounter}>Mount</button>
                <button className="btn-lg" disabled={!this.state.mount} onClick={this.unmountCounter}>Unmount</button>
                <button className="btn-lg" onClick={this.ignoreCase}>Ignore Prop</button>
                <button className="btn-lg" onClick={this.seedGenerator}>Seed Generator</button>
                <br/>
                <br/>
                {this.state.mount && <Lifecycle_methods ignoreProp={this.state.ignoreProp}/>}
            </div>
        )
    }
}