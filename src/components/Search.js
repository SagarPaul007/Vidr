import React, { useState } from "react";

const Search = ({ setSearchLink, gif }) => {
  // state
  const [text, setText] = useState("");

  //  handler function
  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchLink(text);
  };

  return (
    <div className="container">
      <div className="search">
        <h1 className="heading">Youtube video Downloader</h1>
        <form>
          <input
            value={text}
            onChange={inputChangeHandler}
            type="text"
            className="input"
            placeholder="Paste your video link here"
          />
          <button onClick={submitHandler} className="btn">
            Download
          </button>
        </form>
      </div>
      <div className="gif">
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Search;
