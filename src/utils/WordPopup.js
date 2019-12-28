import React, {Component} from 'react';
import autobind from "class-autobind";
import Popup from "reactjs-popup";

type Props = {
    children: Component,
    showPopup: boolean,
    words: [],
    onClose: any
}

class WordPopup extends Component {
    props: Props

    constructor() {
        super();
        this.state = {showPopup : true}
        this.props = {...arguments}
        autobind(this);
    };

    _togglePopup() {
        this.setState({showPopup : !this.state.showPopup})
    }

    _getWords() {
        return this.props.words
    }

    _handleClick(val) {
        this.props.onClose(val);
    }

    render() {
        let rs = this._getWords().map(w => <li key={w.word} onClick={() => {this._handleClick(w.word)}}>{w.word}</li>);
        return (
            <div data={this._getWords()}>
                {this.props.children}
                {this._getWords().length > 0 && this.state.showPopup ?
                    <Popup
                        defaultOpen={this.state.showPopup}
                        position="right center"
                        closePopup={this._togglePopup.bind(this)}
                       >
                    <ul>{rs}</ul>
                    </Popup> : null}
            </div>
        );

    }
}

export default WordPopup;
