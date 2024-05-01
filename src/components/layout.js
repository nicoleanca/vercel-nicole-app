import * as React from 'react'
import styles from './layout.module.css'
import NavBar from './navbar'

const Layout = ({ pageTitle, children }) => {


  return (
    <div className={styles.background}>
    <div className={styles.container}>
       <header className={styles.siteTitle}>Nicole Anca</header>
       <NavBar/>
      <main>
       {pageTitle && <h1 className={styles.heading}>{pageTitle}</h1>}
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout