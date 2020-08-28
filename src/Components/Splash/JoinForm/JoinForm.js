//Dependencies
import React from 'react';

//Components
import BigButton from '../../BigButton/BigButton'

class JoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return(
      <form id="join" className="join" name="join" onSubmit={(e) => {
        e.preventDefault();
        this.props.addToQueue(this.state.name)
      }}>
        <label htmlFor="inputName" className="joinLabel">Your name:</label>
        <input type="text" name="inputName" id="inputName" className="inputName" onChange={(e) => this.setState({name: e.currentTarget.value})} />
        <BigButton type="submit" classNames='submit' text='join queue' />
      </form>
    );
  }
}

export default JoinForm;