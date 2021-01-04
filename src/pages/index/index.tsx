import React, { Component } from 'react';
import { Image, Button, Space } from 'antd';
class Index extends Component {
  render(){
    return <>
      <Space size={12}>
        <Image
          width={200}
          src={`http://demo.color-ui.com/01.jpg`}
          placeholder={
            <Image
              preview={false}
              src="http://demo.color-ui.com/01.jpg"
              width={200}
            />
          }
        />
      </Space>
    </>
  }
}

export default Index;