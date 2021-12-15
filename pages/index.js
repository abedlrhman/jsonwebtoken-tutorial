import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()
  
  return (
    <>
      <Head>
        <title>auth jwt</title>
      </Head>

      <nav>
        {
          !session ? (
            <button onClick={signIn}>signin</button>
          ) : (
            <>
              <p>{session.user.name}</p>
              {session.user.image && <img src ={session.user.image} alt="image" style={{width: 60, height: 60}}/>}
              <br/>
              <button onClick={signOut}>signout</button>
            </>
          )
        }
      </nav>
      
    </>
  )
}
