import Book from "./Book";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
function Search(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="container">
      <div className="row">
          <div className="col-12 col-md-3 col-xl-3">
            <input
              onChange={props.onChangeInput}
              className="AutoFocus form-control"
              placeholder="Type something..."
              type="text"
            />
            <p>
            <Form.Select aria-label="Default select example" onChange={props.onChangeSelectetCatigoris} size="1">
                <option selected value="">all</option>
                <option value="+subject:art">art</option>
                <option value="+subject:biography">biography</option>
                <option value="+subject:computers">computers</option>
                <option value="+subject:history">history</option>
                <option value="+subject:medical">medical</option>
                <option value="+subject:poetry">poetry</option>
              </Form.Select>
            </p>
            <p>
            <Form.Select onChange={props.onChangeSelectetOrder} size="1">
                <option selected value="&orderBy=relevance">relevance</option>
                <option value="&orderBy=newest">newest</option>
            </Form.Select>
            </p>
          </div>
          <div className="ml-auto">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary search-btn"
            />
          </div>
        </div>
        <div className="row">
          {props.Card.map(book =>{ return(
            <Book
            key={book.id}
            card={book}
            onCardClick={props.handleCardClick}
            />
             )})
          }
          {/* <Button type="submit" onClick={props.onLoadMore} variant="primary" size="lg">Load more</Button> */}
        </div>
      </div>
    </form>
  );
}

export default Search;
