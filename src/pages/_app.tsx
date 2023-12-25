import { AppProps } from 'next/app'

import Layout from '@/components/layout'

import '@/assets/css/globals.css'

interface CustomPageProps {}
 
export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}