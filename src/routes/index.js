// 将路由的相关信息，配置到一个js文件中，再通过模块暴露和引入的方式使用
import Home from "../pages/Home";
import Books from "../pages/Books";
import Pins from "../pages/Pins";
import News from "../pages/News";
import Actions from "../pages/Actions";

const routes = [
  { path: "/", component: Home, title: "首页" },
  { path: "/books", component: Books, title: "小册" },
  { path: "/actions", component: Actions, title: "活动" },
  { path: "/pins", component: Pins, title: "沸点" },
  { path: "/news", component: News, title: "咨询" },
];

export default routes;
