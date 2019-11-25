import React from 'react'

import './AddModalBtn.scss';

import add from '../../assets/Icons/SVG/Icon-add.svg';

export default class AddModalBtn extends React.Component{
    render(){
        return(
            <div onClick={this.props.onClick} className="add-modal-btn">
                <img className="add-modal-btn__icon" src={add} alt="add button"/>
            </div>
        );
    }
}