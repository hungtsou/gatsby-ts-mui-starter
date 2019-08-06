import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import buttonStories from './button.stories'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

buttonStories()
