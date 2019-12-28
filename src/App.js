import React from 'react';
import {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import RichTextEditor from "./rich-text-editor/RichTextEditor"
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
    getText() {
        getMockText().then(function (result) {
            console.log(result);
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel/>
                    <FileZone/>
                </main>
            </div>
        );
    }
}

export default App;
