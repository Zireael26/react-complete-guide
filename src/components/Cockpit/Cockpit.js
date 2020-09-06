import React from "react";
import CssClasses from "./Cockpit.module.css";

const cockpit = (props) => {

    const buttonClasses = [CssClasses.Button];
    const classes = [];
    if (props.persons.length <= 2) {
        classes.push(CssClasses.red);
    }

    if (props.persons.length <= 1) {
        classes.push(CssClasses.bold);
    }

    if (props.showPersons) {
        buttonClasses.push(CssClasses.Red);
    }

    return <div>
        <h1>{props.appTitle}</h1>
        <h2 className={classes.join(' ')}>I'm a React App</h2>
        <button className={buttonClasses.join(' ')} onClick={props.clicked}>Toggle Persons</button>
    </div>;
};

export default cockpit;