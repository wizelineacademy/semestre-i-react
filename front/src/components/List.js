import React from "react";
import Card from "./Card";

const List = ({items}) => (
  <>
    {items.map(item => (
      <Card>{item}</Card>
    ))}
  </>
);

export default List;
