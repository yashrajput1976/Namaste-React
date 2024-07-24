const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "header_" }
            , "Hii this is h1 tag from child 1!! "), React.createElement("h1", { id: "header_" }
                , "Hii this is h2 tag from child 1 !! ")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", { id: "header_" }
            , "Hii this is h1 tag from child 1 !! "), React.createElement("h1", { id: "header_" }
                , "Hii this is h2 tag from child 1 !! ")]
    )]
)

// const heading=React.createElement("h1",{id:"header_"},"Hello World from React !!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);