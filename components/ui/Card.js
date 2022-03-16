const Card = (props) => {
  return (
    <div className="bg-white rounded-md shadow-lg shadow-gray-300">
      {props.children}
    </div>
  );
};

export default Card;
