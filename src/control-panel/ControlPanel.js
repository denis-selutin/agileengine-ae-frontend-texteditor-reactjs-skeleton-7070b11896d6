import React, { Component } from 'react';
import './ControlPanel.css';
import Button from "./Button"

class ControlPanel extends Component {
    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <Button tag="b" cmd="bold" value ="B"/>
                    <Button tag="i" cmd="italic" value ="I"/>
                    <Button tag="U" cmd="underline" value ="U"/>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
