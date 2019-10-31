import React from 'react'
import PropTypes from "prop-types"

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

Checkbox.propTypes = {
    label: PropTypes.string.isRequired
}

export default Checkbox