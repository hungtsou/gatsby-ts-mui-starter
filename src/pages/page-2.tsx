import * as React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import HeaderWithDrawerLayout from '../layouts/headerWithDrawerLayout'

const SecondPage = () => (
  <HeaderWithDrawerLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </HeaderWithDrawerLayout>
)

export default SecondPage
