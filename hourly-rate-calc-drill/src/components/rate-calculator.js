import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            hours : 15,
            dayRate : 5
        }
    }

    dayRateMethod() {
        this.setState({
            dayRate : NumberInput
        })
    }

    hoursMethod() {
        this.setState({
            hours : NumberInput
        })
    }
    
  

    render() {
      
        const rate = this.state.dayRate / this.state.hours;
        console.log(this.state.dayRate, this.state.hours, rate, 'these are values');
        return (
            <form>
                <NumberInput 
                    id="day-rate" 
                    label="Day rate" 
                    min={0} max={5000}
                    someMethod={e => this.dayRateMethod(e)} />
                    
                <NumberInput 
                    id="hours" 
                    label="Hours" 
                    min={1} max={12} 
                    someMethod={e => this.hoursMethod(e)}/>
                <Output 
                    id="hourly-rate" 
                    label="Hourly rate" 
                    value={rate.toFixed(2)} 
                />
            </form>
        );
    }
}

