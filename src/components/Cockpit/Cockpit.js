import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);
    }

    return (
        <div classes={classes.Cockpit}>
            <h1>Hi, I'm a react app</h1>
            <p className = {assignedClasses.join(' ')}> This works</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle View</button>
        </div>
    );
};

export default cockpit;