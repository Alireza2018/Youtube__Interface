import React from 'react'


import styles from './MenuItem.module.css'

const MenuItem = ({children, ...props}) => {

    return <div className={styles.menuItem}>{children}</div>
}

export default MenuItem