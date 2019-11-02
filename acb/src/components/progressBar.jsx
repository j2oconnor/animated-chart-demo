import React, { Component } from "react";
import styled from 'styled-components';

const Tracker = styled.div`
    width: 50%;
    height: 10px;
    margin 15px auto;
    background: rgb(34,34,34);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`;

const ProgressInTracker = styled.div`
    width: ${props => props.percentage}%;
    transition: width 1.5s ease-in;
    height: 100%;
    background: rgb(33, 128, 207);
    border-radius: 9px;
    box-shadow: inset 0 0 5px #000;
`;

class ProgressBar extends Component {

    percentageLimits = (min, value, max) => {
        return Math.min(Math.max(min, value), max);
    }

    render() {
        if (this.props.chartType==='packedbubble'){
            return(<div></div>)
        } else {
            return (
                <Tracker>
                    <ProgressInTracker percentage={this.percentageLimits(0, this.props.percentage, 100)} />
                </Tracker>
            )
        }
    }
}

export default ProgressBar