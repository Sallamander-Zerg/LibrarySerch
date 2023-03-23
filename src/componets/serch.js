import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { Card } from 'react-bootstrap';
function Search() {
const [book, setBook] = useState("");
const [result, setResult] = useState([]);
const [apiKey, setApiKey] = useState("you're api")
const [value, setList ] = useState("");
const [order, setOrder ] = useState("");

function handleChangeInput(event) {
const book = event.target.value;
setBook(book);
}
function handleChangeSelectetCatigoris(event) {
const value = event.target.value;
setList (value);
}
function handleChangeSelectetOrder(event) {
const order = event.target.value;
setOrder (order);
}
function handleSubmit(event) {
event.preventDefault();
axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + value + order +"&key=" + apiKey + "&maxResults=4")
.then(data => {
console.log(data.data.items);
setResult(data.data.items);
})
}
return (
<form onSubmit={handleSubmit}>
<div className="card-header main-search">
<div className="row">
<div className="col-12 col-md-3 col-xl-3">
<input onChange={handleChangeInput} className="AutoFocus form-control" placeholder="Type something..." type="text" />
<p><select onChange={handleChangeSelectetCatigoris} size="1">
<option selected value="">all</option>
<option value="+subject:art">art</option>
<option value="+subject:biography">biography</option>
<option value="+subject:computers">computers</option>
<option value="+subject:history">history</option>
<option value="+subject:medical">medical</option>
<option value="+subject:poetry">poetry</option>
</select></p>
<p><select onChange={handleChangeSelectetOrder} size="1">
<option selected value="&orderBy=relevance">relevance</option>
<option value="&orderBy=newest">newest</option>
</select></p>
</div>
<div className="ml-auto">
<input type="submit" value="Search" className="btn btn-primary search-btn" />
</div>
</div>
</div>
<div className="container">
<div className="row">
{result.map(book => (
<div className="col-sm-2">
<Card style={{ 'marginTop': '10px' }}>

<Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
<Card.Body>
<h5 className="card-title">Card title</h5>
<a className="btn btn-primary">Know more</a>
</Card.Body>
</Card>
</div>
))}
</div>
</div>
</form>

)
}

export default Search
