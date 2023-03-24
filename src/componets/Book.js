import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Book = (props) => {
  return (
    <div className="col-sm-2">
      <Card key={props.card.id}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={
                props.card.volumeInfo.imageLinks !== undefined
                ? props.card.volumeInfo.imageLinks.thumbnail
                : "изображение не найдено"
            }
            alt={props.card.volumeInfo.title}
          />
          <Card.Text
            style={{
              "text-overflow": "ellipsis",
              overflow: "hidden",
              "white-space": "nowrap",
            }}
          >
            {props.card.volumeInfo.title}
          </Card.Text>
          <Button variant="primary" onClick={()=>{
        props.onCardClick(props.card.volumeInfo.imageLinks.thumbnail,props.card.volumeInfo.title)
      }}>Know more</Button>
        </Card.Body>
      </Card>
      </div>
  );
};
export default Book;
