import React from "react";

export default function ProductDetail({ params }) {
  const { id } = params;
  console.log(params);
  return (
    <div>
      <h2>Chi tiet san pham {id}</h2>
    </div>
  );
}
