import React from "react";
import * as tests from './tests'

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false,
        };
    }

    render() {
        return (
            <div>TEST</div>
        );
    }
}

export default TestPage;