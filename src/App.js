import React, { Component } from 'react';
import './App.css'; 
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      fullName:"Badis Marweni",
      imgSrc: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",      
      bio: "Passionate software developer with a flair for creating efficient and innovative solutions, adept at coding in multiple languages and dedicated to delivering high-quality software products. Continuously exploring new technologies to stay at the forefront of the rapidly evolving tech landscape.",
      profession:"Web Developer",
      show:false,
      mountedTime: 0,
    }
  }
  show=()=> {
    this.setState({show:!this.state.show})
  }

  componentDidMount() {
    this.startTime = new Date().getTime();

    // Update elapsed time every second
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTimeInSeconds = Math.floor((currentTime - this.startTime) / 1000);
      this.setState({ elapsedTime: elapsedTimeInSeconds });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
          <button onClick= {()=>{this.show();this.componentDidMount()}} style={{
    textAlign:"center",
    padding: "9px 25px",
    backgroundColor: "black",
    borderRadius:"40px",
    color:"aliceblue",
}}> 
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
          </button>
          {this.state.show ? <div><img src={this.state.imgSrc}/><p> <h2>fullName:</h2>{this.state.fullName} 
          <h2>bio:</h2>{this.state.bio} 
          <h2>profession:</h2>{this.state.profession}</p>
          </div> : null} 
          <h1>Time since last mount: {this.state.elapsedTime} seconds</h1>

      </div>
     
      
    )
  }
}



