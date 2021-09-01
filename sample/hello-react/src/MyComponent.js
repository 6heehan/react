import PropTypes from 'prop-types';
import {Component} from 'react';

/*
const MyConponent = ({name, favoriteNumber, children}) => {
    //const {name, children} = props;
    return (<div>
        my new component. name is {name} <br />
        children value is {children} . <br />
        my favorite number is {favoriteNumber} .
    </div>);
};
*/

class MyComponent extends Component {
    static defaultProps = {
        name: 'basic name'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (<div>
            my new component. name is {name} <br />
            children value is {children} . <br />
            my favorite number is {favoriteNumber} .
        </div>);
    }
}
/*
MyComponent.defaultProps ={
    name: 'basic name'
};

MyComponent.propTypes ={
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
*/
export default MyComponent;