import React from 'react'
import './index.scss'

const Button = ({ text, className, onClick, iconBtn, isDisable, ...props }) => {
  return (
    <div className={`button ${className}${isDisable ? "disable" : ""}`} onClick={onClick} isDisable={isDisable} {...props}>
        {
            iconBtn && iconBtn
        }
        {text}
    </div>
  )
}

export default Button