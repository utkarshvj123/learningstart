import React, { Component } from 'react'
import Form from '../Form';

export default class FullContent extends Component {
   
   
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
<div>
    Hello
</div>
            <Form data={this.props.selected} />
            
            </React.Fragment>
        )
    }
}
