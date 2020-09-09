import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    // if (nextProps.persons !== this.props.persons ||
    //     nextProps.clicked !== this.props.clicked ||
    //     nextProps.changed !== this.props.changed) {
    //     return true;
    // } else {
    //     return false;
    // }

    // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Old Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate', snapshot);
    }

    render() {
        console.log('[Persons.js] Rendering');
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    onClick={() => this.props.clicked(index)}
                    key={person.id}
                    onNameChanged={(event) => this.props.changed(event, person.id)}
                />;
            })
        );


    }


    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount - Cleanup');
    }

}

export default Persons;