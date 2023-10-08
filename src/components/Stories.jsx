import "../styles/Stories.scss";

const Stories = () => {
  return (
    <div className="stories">
      <ul className="list">
        <li>
          <Storie pic={""} name={"me"} />
        </li>
        <li>Friend 2</li>
        <li>Labron James</li>
        <li>Kylie Jenner</li>
        <li>Donald Trump</li>
        <li>Leonel Messi</li>
      </ul>
    </div>
  );
};

const Storie = ({pic, name}) => {
  return (
    <div className="storie">
      <img className="userPic" src={pic} alt="user storie" />
      <p className="userName">{name}</p>
    </div>
  );
};

export default Stories;
