import React, { Component } from 'react'
import styled from 'styled-components'

const Info=styled.div`
display:flex;
padding-left
`;


export default class PersonalInfo extends Component {
    render() {
        return (
            <div>
         <Info>
             <div>Personal Info</div>
             <div>Edit</div>
         </Info>
            </div>
        )
    }
}
