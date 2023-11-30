import React from "react";

export default function ClientLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      {children}
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
