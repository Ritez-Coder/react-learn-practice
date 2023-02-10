
// creating root node
const rootNode = document.getElementById("root")
// 
const root = ReactDOM.createRoot(rootNode)
// creating react element
const reactElement = React.createElement("h2" , {className:"heading", style:{style}} , "This is React without JSX"  )
// rendering react element in root node
root.render(reactElement)