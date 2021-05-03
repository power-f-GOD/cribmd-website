import Head from 'next/head'
import Body from 'next/head'
import { NextPage } from 'next'
import styles from '../styles/app.module.scss'

interface Props {
  launch: {
    mission: string
    site: string
    timestamp: number
    rocket: string
  }
}
const IndexPage: NextPage<Props> = () => {
  //   const date = new Date(launch.timestamp)
  return (
    <main>
      <Head>
        <title>CribMD | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <div className="main-content">
        <div className="header"> </div>
        <h1>welcome to CribMD</h1>
        </div>
        {/* <img src="cribmd-logo.jpg" alt="" /> */}
      </Body>
      

      
      {/* <h2>Next SpaceX Launch: {launch.mission}</h2>
      <p>
        {launch.rocket} will take off from {launch.site} on {date.toDateString()}
      </p> */}
    </main>
  )
}
export default IndexPage

// use getStaticProps for SSG

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const response = await fetch('https://api.spacexdata.com/v3/launches/next')
//   const nextLaunch = await response.json()
//   return {
//     props: {
//       launch: {
//         mission: nextLaunch.mission_name,
//         site: nextLaunch.launch_site.site_name_long,
//         timestamp: nextLaunch.launch_date_unix * 1000,
//         rocket: nextLaunch.rocket.rocket_name,
//       },
//     },
//   }
// }
