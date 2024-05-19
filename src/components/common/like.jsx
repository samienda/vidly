const Like = ({ liked, onClick }) => {
  return (
    <i
      className={liked === true ? "fas fa-heart" : "far fa-heart"}
      onClick={onClick}
    ></i>
  );
};

export default Like;
