// import React from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const AddMeetPage = () => {
  const addMeetupHandler = (enterdMeetupData) => {
    console.log(enterdMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default AddMeetPage;
