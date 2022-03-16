import Card from "../ui/Card";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className="mx-0 my-4">
      <Card>
        <div className="w-full h-80 rounded-t-m overflow-hidden">
          <img
            src={props.image}
            alt={props.title}
            className="w-full object-cover"
          />
        </div>
        <div className="text-center p-4">
          <h3 className="text-xl">{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="p-6 text-center">
          <button
            className="rounded py-2 px-6 bg-transparent text-rose-700 border border-solid border-rose-700 hover:bg-rose-200"
            onClick={showDetailsHandler}
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
