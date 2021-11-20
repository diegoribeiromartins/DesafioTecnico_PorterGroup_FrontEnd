import React from "react";
import Header from "../containers/Header";
import MovieList from "../containers/MovieList";

function Index() {
  return (
    <>
      <Header />
      <div id="page">
        <MovieList />
      </div>
    </>
  );
}

export default Index;
