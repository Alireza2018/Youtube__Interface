import React from 'react'

import styles from './Layout.module.css'

const Layout = ({children, ...props}) => {

    return <div className={styles.root}>{children}</div>
}

export default Layout