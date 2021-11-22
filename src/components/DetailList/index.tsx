import React from "react";
import styled from "styled-components";

interface DetailListType {
  data: {
    label: string;
    content: string;
  }[];
}

const Li = styled.li`
  display: block;
  margin-bottom: 1rem;
  font-weight: medium;
  font-size: 1.1rem;
  line-height: 1.2rem;
  color: var(--primary);
  padding: 1rem;
  transition: all 0.2s;

  &:hover {
    background: #eeeeee;
  }
`;

const Label = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  color: #707070;
  font-size: 0.7rem;
  display: block;
`;

const DetailList: React.FC<DetailListType> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <Li key={index}>
          <Label>{item.label}</Label>
          {item.content}
        </Li>
      ))}
    </ul>
  );
};

export default DetailList;
