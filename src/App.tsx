import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './style/Global'
import theme from './style/theme'
import history from './routerHistory'

import PageLoader from 'components/PageLoader'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import Layout from 'components/layout'

const Home = lazy(() => import('./views/Home'))

const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Router history={history}>
                    <GlobalStyle />
                    <Layout>
                        <SuspenseWithChunkError fallback={<PageLoader />}>
                            <Switch>
                                <Route path="/" exact>
                                    <Home />
                                </Route>

                                {/* 404 */}
                                <Route component={NotFound} />
                            </Switch>
                        </SuspenseWithChunkError>
                    </Layout>
                </Router>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default App
