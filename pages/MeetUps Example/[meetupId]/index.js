// import MeetupDetail from "../../Udemy-Example/components/meetups/MeetupDetail"

// function MeetupDetailsPage(){
//     return (
//         <>
//         <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg" alt="first meetup" title="A first Meetup" address="Some Street ,5" description="Meetup description" />
      

//         </>
//     )
// }

// export async function getStaticPaths(){
//     return{
//         fallback:false,
//         paths:[
//             {
//                 params:{
//                     meetupId:'m1',
//                 },

//             },
//             {
//                 params:{
//                     meetupId:'m2'
//                 }
//             }
//         ]
//     }
// }

// export async function getStaticProps(context){
//     //fetch data for a single meetup
//  const meetupId=   context.params.meetupId;  // .meetupId-folder name
//  console.log(meetupId)
//     return{
//         props:{
//             meetupData:{
//                 image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//                 id:meetupId,
//                 title:"A first Meetup",
//                 address:"Some Street ,5",
//                 description:"Meetup description"

//             }
//         }
//     }
// }

// export default MeetupDetailsPage