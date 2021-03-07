import Head from 'next/head'
import { NextPage } from 'next'

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
        <title>Studiare | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>welcome to Studiare</h1>
      <img src="studiare-logo.jpg" alt="" />
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
