import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Solution from './Solution'
import Solutions from './Solutions'
import { supabase } from './supabaseClient'

export default function Account({ session }) {

  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)

  return (
    <div className="form-widget">
      <div className="form-padding">
        <Button variant="contained"
          className="button block" onClick={() => supabase.auth.signOut()}
        >Sign Out</Button>
      </div>

      <Solution session={session} />
      <Solutions session={session} />

    </div>
  )
}