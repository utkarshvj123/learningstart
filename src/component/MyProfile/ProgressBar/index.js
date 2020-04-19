import React, { Component } from 'react'
import styled from 'styled-components'


const Head=styled.div`
background-color: rgba(20, 0, 90, 0.9);
  width: 1440px;
  height: 141px;
`;


export default class ProgressBar extends Component {
    render() {
        return (
            <Head>
                {"Progree bar   "}
            </Head>
        )
    }
}
