#### react08_app_route_dev项目

1）将路由信息（路由路径，路由组件）提炼到一个js模块中，再将其暴露出去，在需要的js模块中引入

2）路由链接 `<NavLink to="xx"></ NavLink>`

3）路由组件 `<Switch> <Route path="xx" component={ Xxx } /> </Switch>`

4）根组件包裹 `<BrowserRouter> <App /> </BrowserRouter>`

5）路由传参：

​	》**（1）params传参**

​		》`<NavLink to="/home/message/1">xx</ NavLink> `

​		》`<Route path="/home/message/:id" />`

​		》`this.history.match.params`

​	》**（2）state传参**

​		》`<NavLink to={{ pathname:'/home/message/info',state:item }}>xx</NavLink>`

​		》`<Route path="/home/message/info" component={Info} />`

​		》`this.history.location.state`

​	》**（3）search传参** 

​		》`<NavLink to={{ `/home/message/info?name=${item.name}`  }}xx</NavLink>`

​		》`<Route path="/home/message/info" component={Info} />`

​		》`this.history.location.search`

​	》**（4）编程式导航（传参）**

​		》`this.props.history.push(url,state={})`

​		》`this.props.history.goBack()`

​		》`this.props.history.goForward()`

​		》`this.props.history.go(n)`