import { useRef } from "react";
import Card from "../ui/Card";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className="p-4" onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="title" className="block font-bold mb-2">
            Meetup Title
          </label>
          <input
            className="block rounded border border-solid border-gray-500 w-full p-1"
            type="text"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="block font-bold mb-2">
            Meetup Image
          </label>
          <input
            className="block rounded border border-solid border-gray-500 w-full p-1"
            type="url"
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block font-bold mb-2">
            Address
          </label>
          <input
            className="block rounded border border-solid border-gray-500 w-full p-1"
            type="text"
            required
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block font-bold mb-2">
            Description
          </label>
          <textarea
            className="block rounded border border-solid border-gray-500 w-full p-1"
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="mt-4 text-right">
          <button className="cursor-pointer text-white bg-rose-700 py-2 px-6 border border-solid border-rose-700 rounded font-bold hover:bg-rose-300 hover:text-rose-700">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
