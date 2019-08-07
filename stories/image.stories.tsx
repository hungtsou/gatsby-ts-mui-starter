import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// @ts-ignore
import { muiTheme } from 'storybook-addon-material-ui'
import Button from '@material-ui/core/Button'
import theme from '../src/lib/theme'
import Image from '../src/components/image'

export default () =>
  storiesOf('Images', module)
    .addDecorator(muiTheme(theme))
    .add('fluid', () => (
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    ))
