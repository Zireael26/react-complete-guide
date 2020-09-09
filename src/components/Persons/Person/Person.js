import React, {Component, Fragment} from 'react'
import CssClasses from './Person.module.css'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

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

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] Rendering');
        return (
            <Fragment>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                <p onClick={this.props.onClick}> I'm {this.props.name} and I'm {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputElem) => {
                    //     this.inputElement = inputElem;
                    // }}
                    ref={this.inputElementRef}
                    className={CssClasses.Input}
                    type="text"
                    onChange={this.props.onNameChanged}
                    value={this.props.name}
                />
            </Fragment>
        );
    }
}

Person.propTypes = {
    onClick: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default withClass(Person, CssClasses.Person);
