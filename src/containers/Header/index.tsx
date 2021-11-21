import React from "react";
import { useSelector } from "react-redux";
import ExpandedMovieItem from "../../components/ExpandedMovieItem";
import { RootState } from "../../store";

function Header() {
  const { detach } = useSelector((state: RootState) => state.movies);

  return <header>{detach && <ExpandedMovieItem detach={detach} />}</header>;
}

export default Header;
