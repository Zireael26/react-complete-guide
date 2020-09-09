import React, {useEffect, memo, useRef, useContext} from "react";
import CssClasses from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    // Can be used any number of times for different effects
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     // Http Request...
    //     setTimeout(() => {
    //         alert('Saved data to cloud');
    //     }, 1000);
    // }, [props.persons]);

    // This variation only runs the first time
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         alert('Ran the first time');
    //     }, 1000);
    //
    //     // This runs right before the actual effect of useEffect()
    //     return () => {
    //         // clearTimeout(timer);
    //         console.log('[Cockpit.js] useEffect - Cleanup');
    //     };
    // }, []);

    useEffect(() => {
        toggleButtonRef.current.click();
        return () => {

        }
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
        <button
            ref={toggleButtonRef}
            className={buttonClasses.join(' ')}
            onClick={props.clicked}>
            Toggle Persons
        </button>
        <button
            className={CssClasses.LoginButton}
            onClick={authContext.login}>
            Log In
        </button>

        {/*<AuthContext.Consumer>{(context) =>*/}
        {/*    <button className={CssClasses.LoginButton}*/}
        {/*            onClick={context.login}>*/}
        {/*            Log In*/}
        {/*    </button>*/}
        {/*}*/}
        {/*</AuthContext.Consumer>*/}

    </div>;
};

export default memo(Cockpit);