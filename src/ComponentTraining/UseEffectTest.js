import React, { useState, useEffect } from "react";

function UseEffectTest() {
  // [current state, function that allows to update that current state]
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // fetch data from api
  useEffect(() => {
    // execute if resourceType change
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  // show window width
  useEffect(() => {
    // on mount, we're calling this line
    window.addEventListener("resize", handleResize);

    // clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <> </>
            - shortcut for <React.Fragment>
            - key is the only attribute that can be passed to Fragment, but you can't use any key or prop with the shortcut syntax.
          */}
      {/* for window width */}
      <div id="display_width" style={displayWidthStyle}>
        {windowWidth}
      </div>
      {/* for api stuff */}
      <div>
        <button onClick={() => setResourceType("posts")}> Posts </button>
        <button onClick={() => setResourceType("users")}> Users </button>
        <button onClick={() => setResourceType("comments")}> Comments </button>
        <h1> {resourceType} </h1>

        {items.map((item) => {
          return <pre key={item.id}> {JSON.stringify(item)} </pre>;
        })}
      </div>
    </>
  );
}

const displayWidthStyle = {
  background: "teal",
  padding: "10px",
  height: "200px",
  width: "60%",
  margin: "auto",
  textAlign: "center",
};

export default UseEffectTest;
