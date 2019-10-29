import React from 'react'


import styles from './Checkbox.module.css'

const Checkbox = props => {

    const {
        label,
       ...rest 
    } = props

    return (
        <label className={styles.checkBox}>
            {label}
            <input type="checkbox" {...rest}/>
            <span className={styles.checkMark}/>
        </label>
        
    )
}

export default Checkbox