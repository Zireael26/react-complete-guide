import React, {Component} from 'react'
import CssClasses from './Person.module.css'

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//
//     @media (min-width: 500px) {
//         width: 450px;
//     }
// `;

class Person extends Component {

    render() {
        console.log('[Person.js] Rendering');
        return (
            <div className={CssClasses.Person}>
                <p onClick={this.props.onClick}> I'm {this.props.name} and I'm {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input
                    className={CssClasses.Input}
                    type="text"
                    onChange={this.props.onNameChanged}
                    value={this.props.name}
                />
            </div>
        );
    }
}

export default Person;
