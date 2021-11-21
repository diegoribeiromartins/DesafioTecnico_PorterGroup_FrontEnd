import React from "react";
import { useSelector } from "react-redux";
import ExpandedMovieItem from "../../components/ExpandedMovieItem";
import { RootState } from "../../store";

function Header() {
  const { detach } = useSelector((state: RootState) => state.movies);

  return (
    <header>
      <div className="container mx-auto">
        {detach && <ExpandedMovieItem detach={detach} />}
      </div>
    </header>
  );
}

export default Header;
