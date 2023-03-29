import React from "react";
import "./button.css"
class ButtonAnimation extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<>
            <div id="divButton">
                <span id="spanButton"><a href="#"></a></span>
            </div>
        </>);
    }
}

export default ButtonAnimation;