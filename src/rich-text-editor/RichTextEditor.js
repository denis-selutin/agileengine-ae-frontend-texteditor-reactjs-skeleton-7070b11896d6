import React, {Component} from 'react';
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import './RichTextEditor.css';
import autobind from 'class-autobind';

type Props = {
    allowedTags: string[],
    onMouseUp: any
}

class RichTextEditor extends Component {
    props: Props

    constructor() {
        super();
        this.props = {...arguments}
        this.state = {
            html: `Hello in the RichTextEditor sad`,
            editable: true
        };
        autobind(this);
    };

    replace (replaceWith, selected) {
        this.setState({
            html: this.state.html.replace(selected, replaceWith)
        })
    }

    handleChange = evt => {
        console.log(evt.target.value);
        this.setState({html: evt.target.value});
    };

    sanitize = () => {
        this.setState({html: sanitizeHtml(this.state.html, this.props)});
    };

    render() {
        return (
            <ContentEditable
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange}
                onBlur={this.sanitize}
                onDoubleClick={this.props.onMouseUp}
                tagName='article'
            />
        );
    }
}

export default RichTextEditor;