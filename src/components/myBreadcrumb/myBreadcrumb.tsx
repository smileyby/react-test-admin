import React from 'react';
import { Breadcrumb  } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
const MyBreadcrumb  = withRouter((props)=>{
  const { location: { pathname } } = props;
  let currentRoute:any = routes.filter(item => pathname.indexOf(item.path) > -1)[0];
  const breadcrumbItems = [
    <Breadcrumb.Item key="home"><Link to="/index">首页</Link></Breadcrumb.Item>
  ];
  if (currentRoute.breadcrumb !== '首页') {
    breadcrumbItems.push(<Breadcrumb.Item key={currentRoute.path}>{currentRoute.breadcrumb}</Breadcrumb.Item>,)
  }
  if (currentRoute.children) {
    let currentChild = currentRoute.children.filter((item:any) => item.path === pathname)[0];
    if (currentChild) {
      breadcrumbItems.push(<Breadcrumb.Item key={currentChild.path}>{currentChild.breadcrumb}</Breadcrumb.Item>)
    }
  }
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {breadcrumbItems}
    </Breadcrumb>
  );
})

export default MyBreadcrumb;