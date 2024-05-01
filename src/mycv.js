import * as React from 'react'
import Layout from './components/layout'


const CvPage = () => {
  return (
    <Layout pageTitle="My CV">
    <p>Present cv</p>
    <p>Download link</p>
  </Layout>
  )
}


export const Head = () => <Seo title="My CV" />

export default CvPage