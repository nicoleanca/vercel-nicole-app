import * as React from 'react'
import './layout.module.css'
import NavBar from './navbar'

const Layout = ({ pageTitle, children }) => {


  return (
    <div className="background">
    <div className="container">
       <header className="siteTitle">Nicole Anca</header>
       <NavBar/>
      <main>
       {pageTitle && <h1 className="heading">{pageTitle}</h1>}
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout