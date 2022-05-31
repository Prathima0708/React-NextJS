import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails(){
return(
    <>
    <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' title='First Meetup' address='Some Address' description='Some Description'/>
    
    </>
)
}

export async function getStaticProps(){
    return{
        props:{
            meetupData:{
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id:'m1',
                title:'First Meetup',
                address:'Some Address',
                description:'Some Description'
            }
        }
    }
}

export default MeetupDetails
