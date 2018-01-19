const defaultText = "# Heading\n=======\n\n## Sub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*";

function MainTitle(props) {
  return <h2 id='app-title'>{props.title}</h2>;
}

function AreaTitle(props) {
  return <h3 className="area-title">{props.title}</h3>
}

function InputArea(props) {
  return (
    <div id="input-area">
      <AreaTitle title="Edit:" />
      <textarea id={props.id} type="text" onChange={props.handleChange} >{props.content}</textarea>
    </div>
  )
}

function OutputArea(props) {
  return (
    <div id="output-area">
      <AreaTitle title="Preview:" />
      <div id={props.id} dangerouslySetInnerHTML={{
        __html: marked(props.output)
      }}>
      </div>
    </div>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: defaultText }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState( { value: event.target.value } )
  }

  render(){
    return (
      <div>
        <MainTitle title="ReactJS markdown previewer" />
        <InputArea handleChange = {this.handleChange} content = {this.state.value} id="editor" />
        <OutputArea output = {this.state.value} id="preview" />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
