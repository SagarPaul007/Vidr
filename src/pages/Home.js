import React, { useState, useEffect } from "react";

// components
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Result from "../components/Result";

import axios from "axios";

const Home = () => {
  // API
  const url = "https://youtube-dl-sp.herokuapp.com";

  //  State
  const [searchLink, setSearchLink] = useState("");
  const [result, setResult] = useState({ title: "initial" });
  const [gif, setGif] = useState("");

  //  Effect
  useEffect(() => {
    if (searchLink.trim()) {
      setGif("https://media.giphy.com/media/5n28juxcnWxPbgaEFg/giphy.gif");
      axios.get(`${url}/get?url=${searchLink.trim()}`).then((res) => {
        setResult(res.data);
        setGif("");
      });
    }
  }, [searchLink]);

  return (
    <>
      <Navbar />
      <Search setSearchLink={setSearchLink} gif={gif} />
      <Result result={result} searchLink={searchLink} />
    </>
  );
};

export default Home;
