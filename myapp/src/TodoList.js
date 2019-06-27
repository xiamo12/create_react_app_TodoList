import React from 'react';
// import ReactDOM from "react-dom";
import mystyle from './style/index.scss'


class TodoList extends React.Component{
  constructor(){
    super();
    this.state = {
      inputValue: "",
      list: [1,2,3]
    }
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick(){
    this.setState({
      list:[...this.state.list, this.state.inputValue],//把数组原来的项目展开，同时添加从input框里获取的新项目。
      inputValue: ""
    })
  }

  handleItemdelete(index){
    const list = [...this.state.list];//拷贝list数组到list中
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  render(){
    return <div>
    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
    <ul>
    {this.state.list.map( (item,index)=> {
      return <li key={index} onClick={this.handleItemdelete.bind(this, index)} title="点击删除">{item}</li>
    })}
    </ul>
    </div>
  }
}

export default TodoList;
