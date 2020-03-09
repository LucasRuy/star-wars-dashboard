import React, { memo } from 'react'
import styled from 'styled-components'
import{ BREAKPOINTS } from 'utils/CONSTANTS'

import { Group } from 'components/Group'
import { Title } from 'components/Title'
import { Search } from 'components/Search'
import { Navigation } from 'components/Navigation'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    flex-direction: row;
    justify-content: inherit;
  }
`

const Home = () => (
  <Wrapper>
    <Navigation />
    <Group>
      <Title />
      <Search />
    </Group>
  </Wrapper>
)

export default memo(Home)