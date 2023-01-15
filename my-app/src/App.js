import React from "react";
import TableMUI from "./components/TableContent/TableContent";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url(my-app/img.png)",
        width: "100%",
        minheight: "100%",
      }}
    >
      <TableMUI></TableMUI>;
    </div>
  );
};

export default App;
