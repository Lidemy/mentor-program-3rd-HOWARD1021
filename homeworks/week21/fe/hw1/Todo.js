import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.mark = this.mark.bind(this);
  }

  delete() {
    const { todo, handleDelete } = this.props;
    handleDelete(todo.id);
  }

  mark() {
    const { todo, handleMark } = this.props;
    handleMark(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className="list">
        <div className="list-item_state">{todo.isComplete ? 'X' : 'O'}</div>
        <div className={todo.isComplete ? 'list-item_checked' : 'list-item'}>{todo.text}</div>
        <div className="list-item_action">
          <Button onClick={this.delete} bsStyle="primary">刪除</Button>
          <Button onClick={this.mark} bsStyle="primary">{todo.isComplete ? '標記成未完成' : '標記成已完成'}</Button>
        </div>
      </div>

    );
  }
}


export default Todo;
