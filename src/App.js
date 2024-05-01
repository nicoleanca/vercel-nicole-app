import * as React from 'react'
import Layout from './components/layout'
import "./styles/global.css"

const App = () => {
  return (
    <Layout>
      <p className='cursive-font'>Hi, <br/>I build beautiful, accessible and efficient websites. <br/> <span className='align-right'> -Nicole</span></p>
     
    </Layout>
  )
}

export const Head = () => <div />

export default App


