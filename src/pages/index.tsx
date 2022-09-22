import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useUser } from '@supabase/auth-helpers-react'
import { Auth, Button, Typography } from '@supabase/ui'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { log } from 'next-axiom'
import { useEffect, useState } from 'react'

import { definitions } from '@/types/supabase'

export type Test = definitions['test']

const Home: NextPage = () => {
  log.debug('Home')
  const { user, error } = useUser()
  const [data, setData] = useState<Test[]>()
  const router = useRouter()
  useEffect(() => {
    async function loadTestData() {
      const { data }: any = await supabaseClient.from<Test>('test').select('*')
      setData(data)
    }
    if (user) loadTestData()
  }, [user])

  if (!user) {
    return (
      <>
        <Typography.Title level={1}>splato.one</Typography.Title>
        <Auth supabaseClient={supabaseClient} />
        {error && <Typography.Text type='danger'>{error.message}</Typography.Text>}
      </>
    )
  }
  return (
    <>
      <Typography.Title level={1}>splato.one: {user ? user.id : null}</Typography.Title>
      <Button block onClick={() => supabaseClient.auth.signOut()}>
        Sign Out
      </Button>
      <Button block className='mt-5' onClick={() => router.push('/sandbox')}>
        To Somewhere
      </Button>
      <ul>
        {data &&
          data.map((row: any) => (
            <li key={row.id}>
              {row.id}: {row.created_at}
            </li>
          ))}
      </ul>
    </>
  )
}

export default Home
