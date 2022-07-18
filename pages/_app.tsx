import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className='bg-yellow/50'>
        <NavBar/>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
