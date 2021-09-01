import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import { Component, useState } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import LiterationSample from './LiterationSample';
import LifeCycleSample from './LifeCycleSample';
import Info from './Info';
import Average from './Average';

const App = () => {
  return <Info />
}
/*
const App = () => {
  const[visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() =>{
        setVisible(!visible);
      }}
      >{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible && <Info />}
    </div>
  );
};
*/
/*
function getRandomColor() {
  return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      //<ValidationSample />
     
    //   <div>
    //     <ScrollBox ref={(ref) => this.scrollBox=ref}/>
    //     <button onClick={() => this.scrollBox.scrollToBottom()}>to Bottom</button>
    //   </div>
     
    //  //<LiterationSample />
     
    //  <div>
    //    <button onClick={this.handleClick}>random color</button>
    //    <LifeCycleSample color={this.state.color}/>
    //  </div>
     
    //   <Info />
    )
  }
}
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/*
function App() {
  const name = 'react';
  //return <div>{name === 'react' && <h1>this is react.</h1>}</div>;
  //return ( <div> {name === 'react' ? (<h1>this is react</h1> ) : (<h2>this is not react</h2>) }</div>);
  const num = 0;
  //return num && <div>test false value 0</div>
  return <div className="react">{name}</div>;
}
*/
/*
class App extends Comment {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}
*/
/*
const App = () => {
  //return <MyComponent name="react" favoriteNumber={7}>test</MyComponent>;
  //return <Counter />;
  //return <Say />;
  return <EventPractice />;
};
*/
export default App;
