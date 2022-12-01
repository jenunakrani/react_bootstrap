import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button,Col,Row,Tooltip  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
// import React from 'react';
import {
    RightCircleTwoTone,LoadingOutlined
  } from '@ant-design/icons';

  import { Slider, Typography } from 'antd';
import React, { useState } from 'react';

const { Paragraph } = Typography;


function App() {
  const [rows, setRows] = useState(1);

  const article =
    "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";

  return (
  <>
      <Button type="link">Primary Button</Button>
    <Button>Default Button</Button>

    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Row>
        <Col >
            hey <RightCircleTwoTone /> <LoadingOutlined />
        </Col>
    </Row>
    <Row>
        <Col text='light' span={8}>
            hey
        </Col>
        <Col>
            hey
        </Col>
    </Row>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  <Slider value={rows} min={1} max={10} onChange={setRows} />
      <Paragraph
        ellipsis={{
          rows,
          expandable: true,
          suffix: '--William Shakespeare',
          onEllipsis: ellipsis => {
            console.log('Ellipsis changed:', ellipsis);
          },
        }}
        title={`${article}--William Shakespeare`}
      >
        {article}
      </Paragraph>
 
   </>
  );
}

export default App;
