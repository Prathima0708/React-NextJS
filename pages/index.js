// import Head from "next/head";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="text-4xl text-center">Welcome to Aroha</h1>
//         <Link href="/employees">Click here</Link> to view all employees
//       </main>
//     </div>
//   );
// }








// import Head from "next/head";
// import MeetupList from "../Udemy-Example/components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 5, 12345 Some City',
//     description: 'This is a first meetup!'
//   },
//   {
//     id: 'm2',
//     title: 'A Second Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 10, 12345 Some City',
//     description: 'This is a second meetup!'
//   }
// ];

// function HomePage(props)
// {
  
//   return(
//     <>
// <Head>
// <title>React Meetups</title>
// <meta name="description" content="Browse a huge list of highly active React Meetups" />
// </Head>
// <MeetupList meetups={props.meetups} />
//     </>
//   )
// }

// export async function getStaticProps(){
//   //fetch data from API
//   return{
//     props:{
//       meetups:DUMMY_MEETUPS
//     },
//     revalidate:1
//   }
// }

// export default HomePage



import People from "../src/Zustand Example/components/People"
import Link from "next/link"
import Header from "../src/Movies/Header/Header"

import SimpleBottomNavigation from "../src/Movies/MainNav"
import { Container } from "@mui/material"
function HomePage(){

  return (
    <>
    {/* <p>List of People</p>
    <Link href="/peoplelist">Click here</Link>
     */}
<Header />
<div className="App">
<Container>
 <Link href="/">Trending</Link>
 <Link href="/movies">Movies</Link>
 <Link href="/series">TV Series</Link>
 <Link href="/search">Search</Link>
 
</Container>
</div>



<SimpleBottomNavigation />


    </>
  )
}

export default HomePage








