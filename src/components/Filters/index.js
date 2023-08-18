import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch} from 'react-redux'

import FilterSlice from './filterSlice';

const { Search } = Input;

export default function Filters() {
  const [search, setSearch] =useState('');
  const [status, setStatus] =useState('All');
  const [priority, setPriority] =useState([]);

  const dispatch = useDispatch();

  const handleSearch = (e) =>{
    setSearch(e.target.value)
    dispatch(FilterSlice.actions.searchTodo(e.target.value))
  }
  const handleStatus = (e) =>{
    const value =e.target.value
    setStatus(value)
    dispatch(FilterSlice.actions.statusTodo(value))
  }
  const handleCSelectPriority = (e) =>{
    setPriority(e)
    dispatch(FilterSlice.actions.priorityTodo(e))
  }


  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={search} onChange={handleSearch}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priority}
          onChange={handleCSelectPriority}
        >
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
      </Col>
    </Row>
  );
}
