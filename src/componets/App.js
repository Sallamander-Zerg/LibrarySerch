import Search from "./serch.js";
import ImagePopup from "./ImagePopup.js";
import React from "react";
import { useState } from "react";
import axios from "axios";
function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyAfGL1kO-Pc0tm4pMmVoG9L9PMBf_oGNeI"
  );
  const [Col,setColCard]=useState(30);
  const [selectedCard, setSelectedCard] = useState({ link: "", name: "" });
  const [value, setList] = useState("");
  const [order, setOrder] = useState("");
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  function handleChangeInput(event) {
    const book = event.target.value;
    setBook(book);
  }
  function handleChangeSelectetCatigoris(event) {
    const value = event.target.value;
    setList(value);
  }
  // function handleColCard(event){
  //   event.preventDefault();
  // }
  function handleChangeSelectetOrder(event) {
    const order = event.target.value;
    setOrder(order);
  }
  function handleCardClick(setLink, setName) {
    setSelectedCard({
      link: setLink,
      name: setName,
    });
    console.log("я тут")
    console.log(isCardPopupOpen)
    console.log(selectedCard)
    setIsCardPopupOpen(true);
  }
  function closeAllPopups() {
    setIsCardPopupOpen(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          value +
          order +
          "&key=" +
          apiKey +
          "&maxResults=30"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }
  return (
    <>
      <Search
      onChangeSelectetOrder={handleChangeSelectetOrder}
      onChangeSelectetCatigoris={handleChangeSelectetCatigoris}
      onChangeInput={handleChangeInput}
      onSubmit={handleSubmit}
      // onLoadMore={handleColCard}
      handleCardClick={handleCardClick}
      Card={result}/>
      <ImagePopup
    card={selectedCard}
    onClose={closeAllPopups}
    onOpen={isCardPopupOpen}
  />
  </>
  );
}

export default App;
