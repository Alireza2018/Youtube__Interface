import React from 'react'
import PropTypes from "prop-types"

import styles from './TitleBar.module.css'


const TitleBar = ({channelTitle, title, ...props}) => {
    return (
        <header className={styles.root}>
            <h4>{channelTitle}</h4>
            <h5>{title}</h5>
        </header>
    )
}

TitleBar.defaultProps = {
    channelTitle: '',
    title: ''
}

TitleBar.propTypes = {
    channelTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default TitleBar