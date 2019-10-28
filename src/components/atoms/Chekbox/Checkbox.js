import React from 'react'


import styles from './Checkbox.module.css'

const Checkbox = props => {

    const {
        label,
       ...rest 
    } = props

    return (
        <label className={styles.checkBox}>
            <input type="checkbox" {...rest}/>
            <span>{label}</span>
        </label>
        
    )
}

export default Checkbox