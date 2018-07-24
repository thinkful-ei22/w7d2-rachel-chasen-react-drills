import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    setToggle(toggle){
        this.setState({
            toggle: true
        })
    }

    render() {
        if (!this.state.toggle){
            return(
                    <SurpriseButton onClick={() => this.setToggle()}/>
            )
            // return <SurpriseButton onClick={e => this.onSumbit(e)}/>;
        }
        else if (this.state.toggle){
            return(
                <div>
                    <SurpriseImage />
                </div>
            )
        }
    }
}
