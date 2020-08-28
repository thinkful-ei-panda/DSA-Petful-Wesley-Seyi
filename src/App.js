//Dependencies
import React from 'react';
import {Route, withRouter} from 'react-router-dom';

//Components
import Queue from './Components/Queue/Queue';
import Splash from './Components/Splash/Splash';
import PetList from './Components/PetList/PetList';
import AdoptedList from './Components/AdoptedList/AdoptedList';
import config from './config';
import Congratulations from './Components/Congratulations';

//CSS
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dog: '',
        cat: '',
        people: '',
        auto: true,
        choiceTime: false,
        adoptionList: []
      }
    }
  
    componentDidMount() {
      this.getPets();
      this.getPeople();
      this.getNextPerson();
    }
    addToQueue = (name) => {
      window.localStorage.setItem('inQueue', 'inQueue');
      fetch(`${config.API_ENDPOINT}people`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({name: name})
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        })
        .then(() => {
          fetch(`${config.API_ENDPOINT}people/all`)
          
            .then(res => {
              if (!res.ok) {
                throw new Error('please refresh');
              }
            return res.json();
            })
            .then(resJson => {
              this.setState({people: resJson})
              window.alert('Thank you for joining the queue!');
            })
        })
        .catch(error => {
          console.error('there has been an error')
        });
  
    }
  
    cycleNext = (person) => {
      person = person || {};
      fetch(`${config.API_ENDPOINT}people/next`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('please refresh');
        }
      return res.json();
      })
      .then(resJson => {
        if (resJson.wants !== null) {
          person = resJson
        }
        if (person.wants === 'cat' || person.wants === 'both') {
        fetch(`${config.API_ENDPOINT}cat`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => {
          let newAdoptedItem = {petType: 'cat', petName: resJson.name}
          this.setState({
            adoptionList: [newAdoptedItem, ...this.state.adoptionList]});
        })
      }
  
      if (person.wants === 'dog'  || person.wants === 'both') {
        fetch(`${config.API_ENDPOINT}dog`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            }
          })
          .then(res => {
            if (!res.ok) {
              throw new Error('please refresh');
            }
          return res.json();
          })
          .then(resJson => {
            let newAdoptedItem = {petType: 'dog', petName: resJson.name}
            this.setState({
              adoptionList: [newAdoptedItem,...this.state.adoptionList]});
        })
      }})
      .then(() => {
        this.getPets();
      })
      .catch(error => {
        console.error('there has been an error');
      });
  
    }
  
    attemptProcess = (resJson) => {
      if (this.state.auto) {
        this.cycleNext();
      }
      else {
        let check = window.localStorage.getItem('inQueue')
        if (check) {
          if (this.state.choiceTime !== true) {
            this.setState({choiceTime: true});
            window.alert('Its time for you to adopt your animal!');
          }
          }
        }
      }
  
    getNextPerson = () => {
      setInterval(() => {
      fetch(`${config.API_ENDPOINT}people/next`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => {
          if (resJson.auto === false) {
            this.setState({auto: false}, this.attemptProcess(resJson));
          }
          else {
          this.attemptProcess();
          }
        })
        .catch(error => console.error('error in people'));
    }, 7000);
  }
  
    getPeople = () => {
      return fetch(`${config.API_ENDPOINT}people/all`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => {
          this.setState({people: resJson})
          return resJson
        })
        .catch(error => console.error('there has been a people error'));
    }
  
    getPets = () => {
      let data = {}
      fetch(`${config.API_ENDPOINT}dog`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => {
          data.dog = resJson
        })
        .then(() => {
          return fetch(`${config.API_ENDPOINT}cat`)
          .then(res => {
            if (!res.ok) {
              throw new Error('please refresh');
            }
            return res.json();
          })
          .then(resJson => {
            data.cat = resJson;
          })
        })
        .then(() => {
          return fetch(`${config.API_ENDPOINT}people/all`)
          .then(res => {
            if (!res.ok) {
              throw new Error('please refresh');
            }
            return res.json();
          })
          .then(resJson => {
            data.people = resJson;
          })
        })
        .then(() => this.setState({dog: data.dog, cat: data.cat, people: data.people}))
        .catch(error => console.error('refresh please'));
      }
  
    adoptTime = (adoptingType) => {
      if (window.localStorage.getItem('inQueue') && this.state.choiceTime === true) {
      return fetch(`${config.API_ENDPOINT}people/next`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => {
          let person = resJson
            if (adoptingType === 'cat') {
              person.wants = 'cat';
            }
            else if (adoptingType === 'dog') {
              person.wants = 'dog';
            }
            else if (adoptingType === 'both') {
              person.wants = 'both';
            }
            this.setState({person: person});
            window.localStorage.removeItem('inQueue');
            this.props.history.push('/congratulations');
            this.setState({auto: true});
            this.setState({choiceTime: false});
            this.cycleNext(person)
          })
        .catch(error => console.error('error'));
      }
    }
  
    newDog = () => {
      fetch(`${config.API_ENDPOINT}dog`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => this.setState({dog: resJson}))
        .catch(error => console.error('error'));
    }
  
    newCat = () => {
      fetch(`${config.API_ENDPOINT}cat`)
        .then(res => {
          if (!res.ok) {
            throw new Error('please refresh');
          }
        return res.json();
        })
        .then(resJson => this.setState({cat: resJson}))
        .catch(error => console.error('error'));
    }
  
    render() {
      return (
        <div className="App">
          <Queue people={this.state.people} getPeople={this.getPeople} />
          <Route exact path="/" render={() =>
            <Splash addToQueue={this.addToQueue} />} />
          <Route path="/pets" render={() =>
            <PetList dog={this.state.dog} cat={this.state.cat} choiceTime={this.state.choiceTime} adoptTime={this.adoptTime} newDog={this.newDog} newCat={this.newCat}/>} />
          <Route path="/congratulations" component={Congratulations} />
          <AdoptedList adoptionList={this.state.adoptionList} />
        </div>
      );
    }
  }
  
  export default withRouter(App);