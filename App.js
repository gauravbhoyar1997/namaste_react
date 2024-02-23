/*
Create this structure using React.createElement() and render it to the DOM using ReactDOM.

<div id="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>

ReactElement(object)===>HTML(Browser Understands)

*/

const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div",{id:"child1"}, [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]),
    React.createElement("div",{id:"child2"}, [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")])
])


console.log(parent);

const heading = React.createElement("h1", {id:"heading"}, "Namaste from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)