import React from 'react';

// class button extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = { value: " " };

//     // }
//     // btnHandler(res) {
//     //     console.log(res);
//     //     this.setState({ value: res });
//     // }

//     render() {
//         return (
//                 <button type="button" className={"btn " + ( this.props.class ? this.props.class : "")} onClick={this.props.click}>{this.props.label}</button>
//         );
//     }
// }
function button(props) {
    return (
        <button
            type="button"
            className={"btn " + (props.class ? props.class : "")}
            onClick={props.click}>
            {props.label}
        </button>
    );
}
export default button;