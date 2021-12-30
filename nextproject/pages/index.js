import MeetupList from "../components/meetups/MeetupList";

const meetups = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address: "some address 23 445 city lms",
    description: "hello hy",
  },
];

const HomePage = () => {
  return <MeetupList meetups={meetups} />;
};
export default HomePage;
