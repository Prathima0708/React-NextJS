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










// our-domain.com/new-meetup
// import { useRouter } from 'next/router';
import NewMeetupForm from "../../../Udemy-Example/components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
//   const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    // router.push('/');
  }

return (
    <>
<Head>
<title>Add a New Meetup</title>
<meta name="description" content="Add your own meetups" />
</Head>
<NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
)
 
 
}

export default NewMeetupPage;