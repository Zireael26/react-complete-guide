import React, {Fragment} from 'react';
import CssClasses from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from "../hoc/withClass";

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('[App.js] Constructor');
    }

    state = {
        showPersons: false,
        persons: [
            {id: "haad", name: "Abhishek", age: 22},
            {id: "dwdw", name: "Tushar", age: 23},
            {id: "gegfwf", name: "Stephanie", age: 24},
        ],
        changeCounter: 0
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    togglePersonHandler = () => {
        const isVisible = this.state.showPersons;
        this.setState({
            showPersons: !isVisible
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
    }

    nameChangedHandler = (event, id) => {
        // find index of person by id
        const personIndex = this.state.persons.findIndex((psn) => id === psn.id);

        // find the person and make a copy using the spread operator
        const affectedPerson = {...this.state.persons[personIndex]};

        // set the name in the copy
        affectedPerson.name = event.target.value;

        // set the copy in a copy of persons
        const persons = [...this.state.persons];
        persons[personIndex] = affectedPerson;

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    }

    render() {
        console.log('[App.js] Rendering');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <Fragment>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonHandler}
                />
                {persons}
            </Fragment>
        );
    }
}

export default withClass(App, CssClasses.App);