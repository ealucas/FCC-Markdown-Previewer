import React from 'react';
import './App.css';
import marked from 'marked';
import Placeholder from './components/Placeholder'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: Placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }

  getMarkdownText(raw) {
    marked.setOptions({
      breaks: true
    })    
    var rawMarkup = marked(raw, { sanitize: true });
    return { __html: rawMarkup };
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div className="bg-light layout">
        <div >
        <h1 className="pt-2 text-center  h4">Markdown Editor</h1>
        <p className="font-weight-light text-secondary text-center">Markdown is a cool markup language.
        <br /> I
         built this for FCC, hence the Test Suite.</p>
  
        </div>
        <div className="container">
          <div class="row">
            <div class="col-sm-12">
              <textarea id="editor" value={this.state.input}  onChange={this.handleChange}  />
            </div>
            <div id="preview" className="col-sm-12 pt-3" dangerouslySetInnerHTML={this.getMarkdownText(this.state.input)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
