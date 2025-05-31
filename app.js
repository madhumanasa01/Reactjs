
const head= React.createElement("h1",{},"Hello, World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);

/* <div id="parent">
    <div id="child">
        <h1>Hello</h1>
    </div>
</div> */

const parent = React.createElement(
    "div",
    {id :"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"Helloooooo"),
        React.createElement("h2",{},"World!") ]
    )
)
root.render(parent);