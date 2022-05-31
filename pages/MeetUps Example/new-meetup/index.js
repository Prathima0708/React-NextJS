// //our-domain.com/new-meetup

// import NewMeetupForm from "../../Udemy-Example/components/meetups/NewMeetupForm"

// function NewMeetupPage(){
//    async function addMeetupHandler(enteredMeetup)
//     {

//       const response=await fetch('/api/new-meetup',{
//           method:'POST',
//           body: JSON.stringify( enteredMeetup),
//           headers:{
//               'Content-Type':'application/json'
//           }
//       })
//       const data=await response.json()
//       console.log(data)
//     }

//     return(
// <>

// <NewMeetupForm onAddMeetup={addMeetupHandler} />
// </>
//     )
// }

// export default NewMeetupPage









// import React from 'react'
// import NewMeetupForm from '../../../components/meetups/NewMeetupForm'

// const NewMeetupPage = () => {
//   const addMeetupHandler=(enteredMeetupData)=>{
//     console.log(enteredMeetupData)

//   }
//   return (
//     <>
//     <NewMeetupForm onAddMeetup={addMeetupHandler} />
//     </>
//   )
// }

// export default NewMeetupPage