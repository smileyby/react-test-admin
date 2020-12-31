## 接口文档

IP：106.12.120.79:8999

用户管理：
   用户注册：/userAdmin/register
   post请求，参数username，password，icon，email，nickname，note
   用户列表（分页）：/userAdmin/getUserPage
   post请求，参数pageNo,pageSize
角色管理
   新增角色: /role/addRole
   post请求，参数name，sort，description，status
   角色列表（分页）：/role/getRolePage
   post请求，参数pageNo,pageSize
权限管理：
   树形权限：/permission/getPermissionZTreeNodes
   get请求，参数roleId,先默认给1

   新增权限，修改权限，删除角色

登录：/admin/login
      post请求，参数username，password