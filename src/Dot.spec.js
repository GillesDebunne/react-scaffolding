// @flow

import React from 'react'
import snapshotStoriesOf from './utils/snapshotStories'
import Dot from './Dot'

snapshotStoriesOf('Dot', module)
  .add('nominal', () => <Dot />)
  .compareWithSnapshot()
