import '../styles.css';
import "../styles/globals.css";
import Head from "next/head";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; 
import { Analytics } from '@vercel/analytics/next';

// if (typeof window !== 'undefined') {
// posthog.init(`${process.env.NEXT_PUBLIC_POSTHOG_KEY}`, 
//   { api_host: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}`, 
//     person_profiles: 'identified_only',
//     capture_pageview: false,
//     capture_pageleave: true,
//     loaded: (posthog) => {
//       if (process.env.NODE_ENV === 'development') posthog.debug();
//     },
//   })
// }

function MyApp({ Component, pageProps}) {

  // const router = useRouter()
  // posthog.capture({
  //   distinctId: 'lee@vercel.com',
  //   event: 'Page was loaded'
  // })
  // posthog?.capture('$pageview')

  // useEffect(()=>{

  //   const handlePageLeave = () => {
  //     posthog.capture('$pageleave', {
  //       page: window.location.pathname,
  //       referrer: document.referrer,
  //     });
  //   };
  //   window.addEventListener('beforeunload', handlePageLeave);
  //   return () => {
  //     window.removeEventListener('beforeunload', handlePageLeave);
  //   };
  // },[])

  // useEffect(() => {
  //   // Track page views
  //   const handleRouteChange = () => posthog?.capture('$pageview')
  //   router.events.on('routeChangeComplete', handleRouteChange)

  //   return () => {
  //       router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <>
      <Head>{/* <meta charset="UTF-8" /> */}</Head>
      <I18nextProvider i18n={i18n}>
      {/* <PostHogProvider client={posthog}> */}
        <Component {...pageProps} />
        <Analytics />
      {/* </PostHogProvider> */}
      </I18nextProvider>
    </>
  );
}

export default MyApp;
