import React, { Component } from 'react';
import { Image } from 'antd';

class Index extends Component {
  render(){
    return <>
      <Image
      width={200}
      src={require('../../image/index.jpg')}
    />
    </>
  }
}

export default Index;