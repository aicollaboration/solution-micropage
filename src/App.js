
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';

import { supabase } from './supabaseClient';
import Auth from './container/Login/Auth';
import Account from './container/Profile/Account';
import Home from './container/Home/Home';
import SolutionDetail from './container/SolutionDetail/SolutionDetail';
import Dashboard from './container/Home/Dashboard';
import Solutions from './container/Solutions/Solutions';
import Header from './components/Header/Header';
import Page404 from './container/Other/Page404';
import { ProtectedRoute } from './util/ProtectedRoute';
import { setLocalStorage } from "./util/storage";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css'


export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    <div className="App">

      {session === null && <Auth setSession={setSession} setLoading={setLoading}/>}
      {session !== null &&
        <BrowserRouter>

          {!loading && <Header session={session} />}

          <CssBaseline />
          <Container fixed>

            <main>
              <Switch>
                {/* <ProtectedRoute as={Home} session={session} role={1} path="/home" /> */}
                <ProtectedRoute as={SolutionDetail} role={1} path={`/SolutionDetail/:id`} />
                <ProtectedRoute as={Solutions} role={1} path="/Solutions" />

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

    </div>
  )
}

