import React from 'react'
import { shallow } from 'enzyme'
import MaskedImage from './masked-image'

describe('(Component) MaskedImage', function() {
  it('should render properly the first time', function() {
    shallow((<MaskedImage
      image=""
      uncoveredPaths={{map: () => {}}}
      uncovering
      onPointUncovered={() => {}}
      onUncoveringChange={() => {}}
      style={{}}
      maskColor=""
      />),
      { context: { muiTheme: { } } }
    )
  })
})