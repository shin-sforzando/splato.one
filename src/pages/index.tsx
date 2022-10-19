import { useSessionContext, useUser } from '@supabase/auth-helpers-react'
import { Auth, ThemeMinimal } from '@supabase/auth-ui-react'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

import { testDataAtom } from '@/stores/testDataAtom'

const LoginPage = () => {
  const { error, supabaseClient } = useSessionContext()
  const user = useUser()
  const [testData, setTestData] = useAtom(testDataAtom)

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabaseClient.from('test').select('*')
      if (!error) {
        setTestData(data)
      }
    }
    // Only run query once user is logged in.
    if (user) {
      loadData()
    }
  }, [setTestData, supabaseClient, user])

  if (!user) {
    return (
      <>
        {error && <p>{error.message}</p>}
        <Auth redirectTo='/' appearance={{ theme: ThemeMinimal }} supabaseClient={supabaseClient} />
      </>
    )
  }

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(testData, null, 2)}</pre>
    </>
  )
}

export default LoginPage
