import React, { Component } from 'react'
import './ColorBox.css'
export default class ColorBox extends Component {
    render() {
        const{name ,background}=this.props
        return (
            <div  style={{background}}  className="ColorBox">
             <div className='copycontainer' >
             <div className='box-content'>
             <span>{name}</span>
             </div>
             <button className='copy-button' >COPY</button>
             </div>
             <span>MORE</span>
            </div>
        )
    }
}
