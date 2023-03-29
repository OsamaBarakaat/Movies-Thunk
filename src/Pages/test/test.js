import React from "react";
import ButtonAnimation from "../../components/button/button";

class TestPages extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<>
            <ButtonAnimation name="Test Name" />
        </>);
    }
}

export default TestPages;