import {Component} from "react";

const AsyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
           importComponent()
            .then(component => {
                this.setState({component: component.default});
            });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default AsyncComponent;
