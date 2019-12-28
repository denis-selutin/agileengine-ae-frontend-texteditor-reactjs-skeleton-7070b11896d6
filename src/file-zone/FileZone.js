import React, { Component } from 'react';
import './FileZone.css';
import RichTextEditor from "../rich-text-editor/RichTextEditor";
import getSynonyms from "../utils/getSynonyms"
import getSelectedText from "../utils/getSelectedText"
import autobind from "class-autobind";

import WordPopup from "../utils/WordPopup";

class FileZone extends Component {

    constructor () {
        super(...arguments);
        this.state = ({
            selected: '',
            words: []
        })
        this.getSynonyms = getSynonyms.bind(this);
        autobind(this);
        this.editor = React.createRef();
        this.popup = React.createRef();
    }

    _replace(val) {
        console.log("replacing " + this.state.selected +" with " + val)
        if(val !== '' && this.state.selected !== '') {
            console.log(this.editor.current.state.html)
            this.editor.current.setState({
                html : this.editor.current.state.html.toString().replace(this.state.selected, val),
                showPopup: true
            })
            this.setState({
                selected: '',
                words: []
            })
        }
    }

    _handleMouse = () => {
        let selected =  getSelectedText().trim()
        this.setState({selected: selected})
        this.getSynonyms(selected);
        console.log("handle click");
    }

    render() {
        return (
            <div id="file-zone">
                <div id="file">
                    <WordPopup ref={this.popup} words={this.state.words} onClose={this._replace}>
                        <RichTextEditor ref={this.editor} allowedTags={["b", "i", "em", "strong", "u"]} onMouseUp={this._handleMouse} />
                    </WordPopup>
                </div>

            </div>
        );
    }
}

export default FileZone;
