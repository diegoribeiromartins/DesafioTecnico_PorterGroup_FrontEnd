import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";

interface MovieBackDropType {
  address: string;
}

const BackDrop = styled.div<MovieBackDropType>`
  background: linear-gradient(
      0deg,
      rgba(16, 30, 48, 1) 15%,
      rgba(16, 30, 48, 0) 100%
    ),
    url(${(props) => props.address});
  background-size: cover;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  opacity: 0.5;
`;

const MovieBackDrop: React.FC<MovieBackDropType> = ({ address }) => {
  const { configuration } = useSelector((state: RootState) => state);

  return (
    <BackDrop
      address={`${configuration.data?.images.secure_base_url}original${address}`}
    />
  );
};

export default MovieBackDrop;
