import React, { Component } from 'react'
import "./remove-btn.scss"
// import axios from 'axios';

export default class Removebtn extends Component {


    handleDelete = (event) => {
        event.preventDefault();
        console.log('this clicks!')
        // axios.delete('http://localhost8080/inventory/{this.props.dataId}')
        // .then(response => {
        //     console.log(response);
        //     console.log(response.data)
        // })

    }

    render() {
        return (
            <div className='Removebtn__btn-container' onClick={this.handleDelete}> 
                <p className="Removebtn__btn">Remove</p>
            </div>
        )
    }
}
