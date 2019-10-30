import React from 'react'
import classNames from 'classnames'
import PropTypes from "prop-types"

import styles from './Button.module.css'

const Button = props => {

    const {
        children,
        simple,
        style,
        ...rest
    } = props

    const btnClasses = classNames({
        [styles.button]: true,
        [styles.simple]: simple
    })

    return <button className={btnClasses} style={{...style}} {...rest}>{children}</button>
}

Button.propTypes = {
    simple: PropTypes.bool
}

export default Button