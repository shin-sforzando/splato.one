import type { NextPage } from 'next'
import { log } from 'next-axiom'

const Home: NextPage = () => {
  log.debug('Home')
  return (
    <>
      <span className='text-3xl font-bold'>splato.one</span>
    </>
  )
}

export default Home
