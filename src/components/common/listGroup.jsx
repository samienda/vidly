const ListGroup = (props) => {
  const { currentGenre, onGenreChange, items, textProperty, valueProperty } =
    props;

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

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
