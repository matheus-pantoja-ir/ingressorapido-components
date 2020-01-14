import React from 'react'
import './style.css'

const Input = (props) => {
	return (
		<div className="ir-input-container">
			<input className="ir-input" {...props} />
			<span className="ir-input-line"></span>
		</div>
	)
}

export default Input