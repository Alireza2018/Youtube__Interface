import React from 'react'
import classNames from 'classnames'
import PropTypes from "prop-types"


import styles from './MenuItem.module.css'

const MenuItem = ({children, style, className,  ...props}) => {

    const rootClasses = classNames({
        [styles.menuItem]: true,
        [className]: className !== undefined
    })

    return <div className={rootClasses} style={{...style}} {...props}>{children}</div>
}

export default MenuItem