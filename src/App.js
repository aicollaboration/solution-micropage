
import { green, orange } from '@mui/material/colors';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './container/Home/Dashboard';
import Home from './container/Home/Home';
import Auth from './container/Login/Auth';
import Page404 from './container/Other/Page404';
import Account from './container/Profile/Account';
import SolutionDetail from './container/SolutionDetail/SolutionDetail';
import Solutions from './container/Solutions/Solutions';
import { supabase } from './supabaseClient';
import { ProtectedRoute } from './util/ProtectedRoute';

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = unstable_createMuiStrictModeTheme();


  const outerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });

  const innerTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    <div className="App">
      <ThemeProvider theme={innerTheme}>

        {session === null && <Auth setSession={setSession} setLoading={setLoading} />}
        {session !== null &&
          <BrowserRouter>

            {!loading && <Header session={session} />}

            <CssBaseline />
            <Container fixed>

              <main>
                <Switch>
                  <ProtectedRoute as={SolutionDetail} role={1} path={`/solutions/:id`} />
                  <ProtectedRoute as={Solutions} role={1} path="/solutions" />

                  <ProtectedRoute as={Dashboard} role={1} path="/dashboard" />
                  <ProtectedRoute as={Home} role={1} path="/home" />

                  <ProtectedRoute as={Auth} role={1} path="/login" />
                  <ProtectedRoute as={Account} role={1} path="/" />
                  <ProtectedRoute as={Page404} role={1} path="/**" />
                </Switch>
              </main>

            </Container>
          </BrowserRouter>
        }

      </ThemeProvider>

    </div>
  )
}

