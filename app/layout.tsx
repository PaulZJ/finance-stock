/*
 * @Author: PaulZJ zhangjun8896@126.com
 * @Date: 2024-03-14 18:41:03
 * @LastEditors: PaulZJ zhangjun8896@126.com
 * @LastEditTime: 2024-03-15 01:26:13
 * @FilePath: /finance-stock/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, Toolbar, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddchartIcon from "@mui/icons-material/Addchart";
import BackpackIcon from "@mui/icons-material/Backpack";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import AirlinesIcon from "@mui/icons-material/Airlines";
import { grey, pink } from "@mui/material/colors";
import Link from "next/link";
import theme from "./global.theme.config";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import SearchHeader from "./component/searchHeader";
import FinanceSection from "./component/financeSection";
import StockFinance from "./component/stockSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "股票行情",
  description: "关于股票行情的一个Demo网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <SearchHeader placeholder="请输入股票代码"></SearchHeader>
          <div className="flex flex-row w-full">
            <FinanceSection/>

          <StockFinance/>

            <div className="h-screen w-full bg-gray-100">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
