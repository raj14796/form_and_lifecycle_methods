import React from "react";

//const ErrorComponent = () => <div>{props.ignore}</div>

export default class Lifecycle_methods extends React.Component{
    constructor(props){
        console.log("I am in constructor");
        super(props);

        this.state = {
            counter : 0,
            initializing : true
        }
    }

    //called after first render
    componentDidMount(){
        console.log("I am in Component Did Mount");
        setTimeout(() => {
            this.setState({initializing : false});
        },1000)
        console.log("------------------------------------------");
    }

    //called before fisrt render
    componentWillMount(){
        console.log("I am in Component Will Mount");
        console.log("------------------------------------------");
    }

    //called before render if there is any update in state or prop
    //render will be called only if returns true
    shouldComponentUpdate(nextProps,nextState){
        console.log("I am in Should Component Update");
        console.log("------------------------------------------");
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
            console.log("Should Component Update : Do not Render");
            return false;
        }
        console.log("Should Component Update : Render")
        return true;
    }
    

    increment = () => {
        this.setState({counter : this.state.counter+1});
    }
    decrement = () => {
        this.setState({counter : this.state.counter-1});
    }
    render(){
        console.log("I am in render");
        if(this.state.initializing){
            return <div className="text-center font-weight-bolder" style={{"fontSize":40}}>Inititalizing...</div>
        }
        return <div>
            <div className="text-center">
            <button className="btn-lg" onClick = {this.increment}>Increment</button>
            <button className="btn-lg" onClick = {this.decrement}>Decrement</button>
            </div>
            <br/>
            <div className="text-center font-weight-bolder" style={{"fontSize":40}}>
                Counter : {this.state.counter}
            </div>
            {/* <ErrorComponent /> */}
        </div>
    }

    //called after render if there is any update in state or prop
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("I am in Component Did Update");
        console.log("------------------------------------------");
    }

    //called when a component is unmounted
    componentWillUnmount(){
        console.log("I am in Component Will Unmount");
        console.log("------------------------------------------");
    }

    //called when a component gives an error
    componentDidCatch(error,info){
        console.log("I am in Component Did Catch");
        console.log("------------------------------------------");
    }
}