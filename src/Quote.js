import React from "react";
import Quotedata from "./Quotedata.js";
import { connect} from "react-redux"

class Quote extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props);
        const x = this.props.posts;
    
    return(
    <div>
    <p>{Quotedata[x].text}</p>
    <p>{this.props.posts}</p>
    </div>
    )
    }   
}

const mapStateToProps = (state) =>{
    return {
        posts: state.counter
    }
}

export default connect(mapStateToProps)(Quote);