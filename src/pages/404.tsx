import * as React from 'react'

import SEO from '../components/seo'
import HeaderWithDrawerLayout from '../layouts/headerWithDrawerLayout'

const NotFoundPage = () => (
  <HeaderWithDrawerLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </HeaderWithDrawerLayout>
)

export default NotFoundPage
