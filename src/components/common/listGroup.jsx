const ListGroup = ({
  currentGenre,
  onGenreChange,
  items,
  textProperty = "name",
  valueProperty = "_id",
}) => {
  // console.log(genres);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onGenreChange(item)}
          key={item[valueProperty]}
          className={
            item[textProperty] === currentGenre[textProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
