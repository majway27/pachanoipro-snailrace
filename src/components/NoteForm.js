import React, {Component} from 'react';
import {Card, ButtonToolbar, Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap';

class NoteForm extends Component {
  componentWillMount() {
    this.resetState = this.resetState.bind(this);
    this.resetState();
  }

  componentWillReceiveProps(nextProps) {
    const {id, title, text} = nextProps.note;
    this.setState({id, title, text});
  }

  resetState () {
    const {id, title, text} = this.props.note;
    this.setState({id, title, text});
  }

  onInputChange (event) {
    let obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  saveBtnClick () {
    this.props.onSaveClick(this.state);
  }

  render() {

    return (
      <Card bsStyle="primary">
      <form>
        <FormGroup>
          <FormLabel>Title</FormLabel>
          <FormControl
            id="title" 
            type="text" 
            placeholder="Enter a title" 
            value={this.state.title} 
            onChange={this.onInputChange.bind(this)}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Note text:</FormLabel>
          <FormControl 
            id="text"
            componentClass="textarea" 
            placeholder="..." 
            value={this.state.text}
            onChange={this.onInputChange.bind(this)}
            />
        </FormGroup>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.saveBtnClick.bind(this)}>Save</Button>
          <Button onClick={this.resetState}>Cancel</Button>
        </ButtonToolbar>
      </form>
      </Card>
    );
  }
}

export default NoteForm;