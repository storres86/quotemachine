import React from "react";
import Quotedata from "./Quotedata.js";
import { connect} from "react-redux"

class AuthorName extends React.Component{
    constructor(){
        super();
    }
    render(){
        const x = this.props.posts;
    
    return(
    <div>
    <p>{Quotedata[x].author}</p>
    </div>
    )
    }   
}

const mapStateToProps = (state) =>{
    return {
        posts: state.counter
    }
}

export default connect(mapStateToProps)(AuthorName);