import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>NextJS Meetups</title>
        <meta name="description" content="Browse a list of Meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // runs before component is rendered
  // fetch data from API here
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gmsmy.mongodb.net/NextJS?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("NextJS");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    //must return an object with the props property, which is also an object passed as props to component
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //regenerates on the server every 10 seconds if requests are coming in
  };
};

export default HomePage;
