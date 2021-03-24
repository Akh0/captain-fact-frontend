import React from 'react'
import PropTypes from 'prop-types'
import { SearchBox as AlgoliaSearchBox } from 'react-instantsearch-dom'
import styled from 'styled-components'
import Container from '../StyledUtils/Container'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'react-router'

const StyledSearchBox = styled(AlgoliaSearchBox)`
  input[type='search'] {
    border: 1px solid lightgrey;
    padding: 8px;
    border-radius: 4px;
    padding-left: 32px;
    background: #f9f9f9;
    font-size: 14px;
    outline: none;
    width: 100%;
    &:focus {
      border-color: #6ba3a7;
      box-shadow: 0 0 0 0.125em rgb(107 163 167 / 25%);
    }
  }

  button[type='submit'] {
    position: absolute;
    left: 4px;
    top: 8px;
    border: none;
    cursor: pointer;
    background: none;

    svg {
      width: 15px;
      height: 15px;
    }
  }

  button[type='reset'] {
    position: absolute;
    right: 6px;
    top: 10px;
    border: none;
    background: none;
    cursor: pointer;
  }
`

const SearchBox = ({ router, t }) => {
  return (
    <Container position="relative" flex="1 1" maxWidth="600px">
      <StyledSearchBox
        placeholder="xxx"
        // searchAsYouType={false}
        translations={{ placeholder: t('search.placeholder') }}
        onSubmit={(e) => e.preventDefault()}
        onChange={() => {
          if (router.location.pathname !== '/search') {
            router.push('/search')
          }
        }}
      />
    </Container>
  )
}

export default withNamespaces('main')(withRouter(SearchBox))
