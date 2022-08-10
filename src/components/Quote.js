import React, { useState, useEffect } from "react";

function Quote() {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = () => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((response) => setQuotes(response));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="kanye-wrapper">
      <h1 className="title">Kanye Best</h1>
      <div className="quote">{JSON.stringify(quotes.quote)}</div>
      <button onClick={getQuotes} className="btn">
        New Kanye Motivation
      </button>
    </div>
  );
}

export default Quote;
