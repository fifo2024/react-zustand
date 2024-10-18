import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import router from "./router";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";

import "./styles/index.scss";

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
};

export default App;
