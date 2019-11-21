import React, { Component } from 'react'
import "./remove-btn.scss"

export default class Removebtn extends Component {
    state ={
        toggle: false
    }

    render() {
        return (
            <div className='test-container'>
                <p className="test">Remove</p>
            </div>
        )
    }
}
