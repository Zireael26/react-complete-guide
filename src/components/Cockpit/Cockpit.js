import React, {useEffect, memo} from "react";
import CssClasses from "./Cockpit.module.css";

const Cockpit = (props) => {

    // Can be used any number of times for different effects
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     // Http Request...
    //     setTimeout(() => {
    //         alert('Saved data to cloud');
    //     }, 1000);
    // }, [props.persons]);

    // This variation only runs the first time
    useEffect(() => {
        const timer = setTimeout(() => {
            alert('Ran the first time');
        }, 1000);

        // This runs right before the actual effect of useEffect()
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] useEffect - Cleanup');
        };
    }, []);

    const buttonClasses = [CssClasses.Button];
    const classes = [];
    if (props.personsLength <= 2) {
        classes.push(CssClasses.red);
    }

    if (props.personsLength <= 1) {
        classes.push(CssClasses.bold);
    }

    if (props.showPersons) {
        buttonClasses.push(CssClasses.Red);
    }

    return <div>
        <h1> {props.title}</h1>
        <h2 className={classes.join(' ')}>I'm a React App</h2>
        <button className={buttonClasses.join(' ')} onClick={props.clicked}>Toggle Persons</button>
    </div>;
};

export default memo(Cockpit);