import React, {Component} from 'react';
import cx from 'classnames';
import autobind from 'class-autobind';

type Props = {
    value: string,
    cmd: string,
    arg: string,
    tag: string
};

export default class Button extends Component {
    props: Props;

    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        return (
            <button onMouseDown={this._onMouseDown} className="format-action" type="button" cmd={this.props.cmd} >
                {React.createElement(this.props.tag, {}, this.props.value)}
            </button>
        );
    }

    _onMouseDown(evt: Event) {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(this.props.cmd, false, this.props.arg); // Send the command to the browser
    }
}