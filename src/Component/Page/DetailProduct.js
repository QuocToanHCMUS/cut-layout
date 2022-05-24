import React, { Component } from 'react';
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class DetailProduct extends Component {
    componentDidMount() {
        //const id = this.props.match.params.id;
        //const { id } = this.props.params;
        let param = this.props.params;
        console.log(param);
    }

    render() {
        return (
            <div>
                Detail Product 
            </div>
        );
    }
}

export default withParams(DetailProduct);