import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../dropdown.scss";

const testdata = [
    'Frem',
    'Tind',
    'Fremtind',
    'Jøkkkul'
];

const Icon = () => {
    return (
        <svg className='chevron' style={{transform: 'rotate(180deg)'}} width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13L25 1" stroke="black"/>
        </svg>
    );
};

class App extends Component{
    state = {
        test: true,
    };

    render(){
        const {
            test
        } = this.state;

        console.log("test", test)
        return (
            <div className='jkl-dropdown-wrapper'>
                <select className="jkl-dropdown" onClick={() => this.setState((prevState) => {test: !prevState.test})}>
                    {testdata.map((data, idx) => <option className='jokul-option' key={idx}>{data}</option>)}
                </select>
                <Icon />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById("app"));
