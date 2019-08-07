import React from 'react'

import { storiesOf } from '@storybook/react'
// @ts-ignore
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/lib/theme'
import HeaderWithDrawerLayout from '../src/layouts/headerWithDrawerLayout'

export default () =>
  storiesOf('Layouts', module)
    .addDecorator(muiTheme(theme))
    .add('Header with drawer', () => (
      <HeaderWithDrawerLayout>
        <h2>Header with drawer layout</h2>
      </HeaderWithDrawerLayout>
    ))
