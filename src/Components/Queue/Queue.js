//Dependencies
import React from 'react';
import {Link} from 'react-router-dom'

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInQueue: '',
      positionInQueue: '',
      people: []
    }
  }

  numberInQueue = () => {
    let number = <h6 className="bold" key={Math.random()}>{this.state.people.length} people in the queue now</h6>;
    return number;
  }
  
  checkIfInQueue = () => {
    let inQueueText = <div><h6>You are not in the queue!</h6><Link to="/"><h6 className="bold joinSmall">Join!</h6></Link></div>
    let inQueueCheck = window.localStorage.getItem('inQueue');
    let indexOf = '';
    if (inQueueCheck) {
      let find = this.state.people.find(person => person.auto === false);
      indexOf = this.state.people.indexOf(find);
      if (indexOf === 0) {
        inQueueText = <div><h6 className="bold">Go adopt your animal!</h6></div>
      }
      inQueueText = <div><h6 className="bold">You are number {indexOf + 1} in queue!</h6></div>
    }
    return inQueueText;
  }

  componentDidMount() {
    this.props.getPeople()
      .then(resJson => this.setState({numberInQueue: resJson.length, people: resJson }));
    setInterval(() => { this.props.getPeople()
      .then(resJson => this.setState({numberInQueue: resJson.length, people: resJson }));
  }, 7000)
};

  render() {
    let people = this.props.people || [];
    return(
      <section className="personQueueList">
        {this.numberInQueue(people)}
        {this.checkIfInQueue(people)}
      </section>

    );
  }
}

export default Queue;