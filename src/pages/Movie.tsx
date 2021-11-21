import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowMenu } from "../store/navigation";

import MovieDetail from "../containers/MovieDetail";

function Movie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowMenu(true));

    return () => {
      dispatch(setShowMenu(false));
    };
  }, []);
  return (
    <>
      <div id="page">
        <MovieDetail />
      </div>
    </>
  );
}

export default Movie;
