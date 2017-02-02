import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
        jobs: []
    };
  }
  
  componentDidMount() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            jobs: result.data.jobs
          });
        })

        console.log(th);
  }
  
  componentWillUnmount() {
    this.serverRequest.abort();
  }


  render() {
    return (
      <div>
        <h1>Jobs!</h1>
        {/* Don't have an ID to use for the key, URL work ok? */}
        {this.state.jobs.map(function(job) {
          return (
            <div key={job.url} className="job">
              <a href={job.url}>
                {job.company_name}
                is looking for a 
                {job.term}
                {job.title}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
