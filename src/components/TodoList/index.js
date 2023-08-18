import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';

import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';

import {useDispatch, useSelector} from 'react-redux'
import { addTodo} from '../../redux/actions';

import { getRemainingToDoSelector } from '../../redux/selecter';

export default function TodoList() {
  const[ todoName, setTodoName] =useState('');
  const[ priority, setPriority] =useState('Medium');

  const ListToDo = useSelector(getRemainingToDoSelector);

  const dispatch = useDispatch();
  const handleAddTodo = () =>{
    dispatch(addTodo({
      id:uuidv4(),
      name:todoName, 
      completed:false, 
      priority:priority,
    }))
    setTodoName('');
    setPriority('')
  }

  const handleChangeName =(e) =>{
    setTodoName(e.target.value)
  }
  const handleChangePriority=(value)=>{
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          ListToDo.map(item => <Todo key={item.id} id={item.id} name={item.name} prioriry={item.priority} completed={item.completed}/>)
        }
        {/* <Todo name='Learn Redux' prioriry='Medium' /> */}
        {/* <Todo name='Learn JavaScript' prioriry="Low" /> */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleChangeName}/>
          <Select defaultValue="Medium" value={priority} onChange={handleChangePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
