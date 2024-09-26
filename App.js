const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"heading"},"This is h1 tag"),
            React.createElement("h2",{id:"heading2"},"This is h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:"heading3"},"This is h1 tag"),
            React.createElement("h2",{id:"heading4"},"This is h2 tag")
        ]
    )]

);


console.log(parent);
// const heading=React.createElement("h1",{id:"heading1"},"Hello world from React");
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);