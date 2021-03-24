import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { InstantSearch, SearchBox, Hits, InfiniteHits } from 'react-instantsearch-dom'
import styled from 'styled-components'

import { searchClient } from '../../lib/algolia'
import Container from '../StyledUtils/Container'
import { VideoCard } from '../Videos/VideoCard'

const MainContainer = styled.div`
  padding: 100px 200px;

  .ais-InfiniteHits {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ais-InfiniteHits-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .ais-InfiniteHits-item > .column {
      width: 100%;
    }
  }

  .ais-InfiniteHits-loadMore {
    background-color: transparent;
    border-color: #6ba3a7;
    color: #6ba3a7;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: calc(0.375em - 1px);
    text-align: center;
    white-space: nowrap;
    border: 1px solid;
    padding: 8px;
    border-radius: 4px;
    margin-top: 40px;
  }
`

const SearchHit = ({ hit }) => {
  return <VideoCard video={hit} />
}

const SearchPage = ({ t }) => {
  return (
    <MainContainer>
      <InfiniteHits translations={{ loadMore: t('search.loadMore') }} hitComponent={SearchHit} />
    </MainContainer>
  )
}

SearchPage.propTypes = {}

export default withNamespaces('main')(SearchPage)
