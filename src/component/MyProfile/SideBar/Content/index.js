import React, { Component } from 'react'
import styled from "styled-components";


const Contents = styled.div`
  // color: #393644;
  // font-family: Gilroy;
  // font-size: 15px;
  // font-weight: 500;
  // line-height: 18px;
  // text-align: left;
  background-color: #f5f5f5;
  width: 216px;
  height: 44px;
  cursor:pointer;
  & > div {
    color: #209af7;
    font-family: Gilroy;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
     padding-top: 13px;
    padding-bottom: 13px;
    margin-left: 48px;
    margin-right: 148px;
  }
`;



export default class Content extends Component {
    render() {
        return (
            <Contents onClick={()=>this.props.clickMe(this.props.name)}>
                <div>
                {this.props.name}
                </div>
            </Contents>
        )
    }
}
