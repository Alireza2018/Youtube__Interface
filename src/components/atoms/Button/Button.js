import React from 'react'

import styles from './Button.module.css'

const Button = props => {

    const {
        children,
        style,
    } = props

    return <button className={styles.button} style={{...style}}>{children}</button>
}

export default Button