const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React",
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "Hello World from React",
);
const child1 = React.createElement("div", { id: "child1" }, [
  heading,
  heading2,
]);
const child2 = React.createElement("div", { id: "child2" }, [
  heading,
  heading2,
]);
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
root.render(parent);
