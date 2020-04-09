import React, {Component} from 'react';
import marked from 'marked';
import Toggle from './Toggle';
import './MarkdownPreview.scss';

class MarkdownPreview extends Component {
  constructor(props){
    super(props);
    this.state={
      input:"Start typing!\n\n# My Blog",
      isLight:true,
      mousedownX:0,
      currentGrid:0,
      cardWidth:0
    };
    this.switchMode = this.switchMode.bind(this);
    this.move = this.move.bind(this);
    this.resize = this.resize.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount(){
    document.getElementById('preview').innerHTML = marked(this.state.input, {breaks:true});
  }

  componentDidUpdate(){
    document.getElementById('preview').innerHTML = marked(this.state.input, {breaks:true});
  }

  switchMode(){
    this.setState({isLight:!this.state.isLight});
  }

  move (e, x, currentGrid) {
     let newGrid = (e.clientX-this.state.mousedownX+this.state.currentGrid);
     if(newGrid>20&&newGrid<(this.state.cardWidth-20)){
       newGrid = newGrid+'px minmax(0, auto)';
     }
    document.querySelector('#page').style.gridTemplateColumns = newGrid;
  }

  resize (e) {
    let page = document.querySelector('#page');
    let currentGrid = getComputedStyle(page).gridTemplateColumns;
    currentGrid = Number(currentGrid.match(/\d+/));
    let x = e.clientX;
    let cardWidth = getComputedStyle(page).width;
    cardWidth = Number(cardWidth.match(/\d+/));
    this.setState({currentGrid: currentGrid});
    this.setState({mousedownX:x});
    this.setState({cardWidth:cardWidth});
    page.addEventListener('mousemove', this.move);
  }

  remove () {
    let page = document.querySelector('#page');
    page.removeEventListener('mousemove', this.move);
    console.log('remove triggered');
  }

  render(){

      return (
        <div id="page" className={this.state.isLight?'light-mode':'dark-mode'} onMouseUp={this.remove}>
          <div id="heading" >
            <h1>Markdown <span>Previewer</span></h1>
            <Toggle toggle={this.switchMode} state={this.state.isLight}/>
            </div>
            <div id="editor-wrapper">
              <textarea id="editor" value={this.state.input} onChange={(e) =>
                this.setState({input:e.target.value})}></textarea>
              <div id="resize-handle" onMouseDown={this.resize} ></div>
            </div>
            <div id="preview-wrapper">
              <div id="preview"></div>
            </div>
        </div>
      );
  }
}

export default MarkdownPreview;
