import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// @ts-ignore
import { muiTheme } from 'storybook-addon-material-ui'
import Button from '@material-ui/core/Button'
import theme from '../src/lib/theme'

export default () =>
  storiesOf('Button', module)
    .addDecorator(muiTheme(theme))
    .add('primary', () => (
      <Button variant="contained" color="primary" onClick={action('clicked')}>
        Hello Button
      </Button>
    ))
    .add('secondary', () => (
      <Button variant="contained" color="secondary" onClick={action('clicked')}>
        Hello Button
      </Button>
    ))
    .add('with some emoji', () => (
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ))
