//路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";

//配置路由实例
const router = createBrowserRouter(
  //配置路由规则
  [
    {
      path: "/",
      element: <Layout />,
      //   children: [
      //     {
      //       path: "/",
      //       element: <div>this is Home</div>,
      //     },
      //     {
      //       path: "/about",
      //       element: <div>this is About</div>,
      //     },
      //   ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]
);

export default router;
