import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'bsdjs', name:'Issa', age:23},
      {id:'adfjs', name:'Phoebe', age:21},
      {id:'cnfrs', name:'Buffay', age:30},
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    // DONT DO THIS this.state.persons[0].name = 'Max';
    this.setState({
      persons: [
        {id:'bsdjs', name:newName, age:23},
        {id:'adfjs', name:'Phoebe', age:21},
        {id:'cnfrs', name:'Buffay', age:30},
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    //console.log(personIndex);
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    //console.log(person.name);

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div >
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed ={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
