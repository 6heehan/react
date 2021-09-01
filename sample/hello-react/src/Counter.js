import React, { useReducer, useState } from 'react';
/*
class Counter extends Component {
    
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>not change number : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('now setState function is called');
                                console.log(this.state);
                            }
                        );
                    }}
                >+1</button>
            </div>
        );
    }
}
*/
/*
const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};
*/

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT' :
            return { value: state.value + 1};
        case 'DECREMENT' : 
            return { value: state.value - 1};
        default : 
         return state;
    }
}

const Counter = () => {
    const[state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    );
};

export default Counter;
