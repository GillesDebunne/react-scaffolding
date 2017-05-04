// @flow

import { storiesOf } from '@kadira/storybook' // eslint-disable-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer' // eslint-disable-line import/no-extraneous-dependencies

// Replacement for StoryBook's storiesOf: record all stories and run snapshot tests on them
export default function(kind: string, module: any) {
  const storyBookStoriesOf = storiesOf(kind, module)
  const stories = {}

  // Dumb object, only used to enable a fluent api
  const fluentApi = {}

  fluentApi.add = (storyName: string, callback: Function) => {
    storyBookStoriesOf.add(storyName, callback)
    stories[storyName] = callback()
    return fluentApi
  }

  fluentApi.compareWithSnapshot = () => {
    // `describe` is not defined when run in StoryBook context, no-op
    if (window && window.describe && typeof window.describe === 'function') {
      describe(kind, () => {
        Object.keys(stories).forEach(storyName => {
          const story = stories[storyName]
          it(storyName, () => {
            const tree: string = renderer.create(story).toJSON()
            expect(tree).toMatchSnapshot()
          })
        })
      })
    }
  }

  return fluentApi
}
