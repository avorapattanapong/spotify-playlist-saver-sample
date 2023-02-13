import '../styles/App.css'
import { Container, Paper } from '@mui/material'
import { Trans } from 'react-i18next'
import { getCadToThbExchangeRate } from '../actions/spotifyApiActions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCadToThbExchangeRate())
  }, [dispatch]);



  return (
    <div className='App'>
      <Container sx={{ backgroundColor: 'red' }}>
        <Paper sx={{ padding: '25px', marginTop: '150px' }}>
          <h1>
            <Trans i18nKey='title'>Title</Trans>
          </h1>
          <div>
            <Trans i18nKey='exchangeRateIntro'>Exchange Rate</Trans>
          </div>
        </Paper>
      </Container>
    </div>
  )
}

export default App
