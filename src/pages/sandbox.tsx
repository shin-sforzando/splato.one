import { User, withPageAuth } from '@supabase/auth-helpers-nextjs'

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
  // async getServerSideProps(ctx) {
  //   const { user } = await getUser(ctx)
  //   return { props: { email: user?.email } }
  // },
})

const Sandbox = ({ user }: { user: User }) => {
  return (
    <>
      Sandbox w/ {user.email} ({user.id})
    </>
  )
}

export default Sandbox
