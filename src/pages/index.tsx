import { useSessionContext, useUser } from '@supabase/auth-helpers-react'
import { Auth, ThemeMinimal } from '@supabase/auth-ui-react'
import { useEffect, useState } from 'react'

const LoginPage = () => {
  const { error, supabaseClient } = useSessionContext()
  const user = useUser()
  const [data, setData] = useState()

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('test').select('*')
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [supabaseClient, user])

  if (!user)
    return (
      <>
        {error && <p>{error.message}</p>}
        <Auth redirectTo='/' appearance={{ theme: ThemeMinimal }} supabaseClient={supabaseClient} />
      </>
    )

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default LoginPage
