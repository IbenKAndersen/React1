import React, { useState, useEffect } from "react";

export default function State3() {
  const [joke, setJoke] = useState({ value: "" });
  const [chuckSelector, setChuckSelector] = useState(false);
  const [dadJoke, setDadJoke] = useState("");

  useEffect(() => {
    //fetching Chuck Norris jokes
    function fetchChuckNorris() {
      fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(joke => {
          setJoke(joke);
        })
        .catch(err => console.log("Ups Chuck Norris" + err));
    }
    fetchChuckNorris();
    //3.b Make sure that you don’t fetch a new Chuck Norris Joke also every 10 seconds
  }, [chuckSelector]);

  //3.a Add a feature, so that every 10 second a joke is fetched from this API
    useEffect(() => {
    const timer = setInterval(() => {
      //fetching dad jokes
      function fetchDad() {
        fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json"
          }
        })
          .then(res => res.json())
          .then(d => setDadJoke(d.joke));
      }
      fetchDad();
    }, 10000);

    //clean up
    //3.c  Ensure that the required timer for the dad jokes is cancelled when the user leaves the page.
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>State Exercise 3</p>
      <h3>Chuck Norris joke</h3>
      <button onClick={() => setChuckSelector(!chuckSelector)}>
        Get Chuck Norris Joke
      </button>
      <br></br><i>Under 17 requires accompanying parent or adult guardian.</i>
      <p>Chuck Norris joke: {joke.value} </p>
      <h3>Dad joke</h3>
      <p>Dad joke: {dadJoke}</p>
    </div>
  );
}
