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
import { AppBar, Toolbar, InputBase, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddchartIcon from '@mui/icons-material/Addchart';
import BackpackIcon from '@mui/icons-material/Backpack';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AirlinesIcon from '@mui/icons-material/Airlines';
import { grey, pink } from '@mui/material/colors';
import Link from 'next/link'
import theme from "./global.theme.config"
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SearchHeader
 from "./component/searchHeader";
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
          <div className="w-100 h-screen bg-slate-200 flew-col items-center pt-20 pl-8">
            <div className="w-full h-20 flew-col tems-center">
              <AddchartIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">最新动态</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AdfScannerIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">股票诊断</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AirlinesIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">财务报表</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AirlineStopsIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">获利能力</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AdminPanelSettingsIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">安全性分析</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AlignHorizontalLeftIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">成长性分析</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AttachMoneyIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">价值评估</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AltRouteIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">董监与筹码</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <AssignmentLateIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">关键指标</Button>
            </div>
            <div className="w-full h-20 flew-col tems-center">
              <BlindsClosedIcon className="ml-12"/>
              <Button size='large' fullWidth color="retroRed">产品组合</Button>
            </div>
          </div>

          <div className="h-screen bg-slate-300 flew-col items-center pt-20 pr-10">
            <div className="w-full h-20 flew-col justify-start">
              <BackpackIcon className="ml-4"/>
              <Link href="/chart" prefetch>每月营收</Link>
            </div>
            <div className="w-full h-20 flew-col justify-start">
              <BackpackIcon className="ml-4"/>
              <Link href="/bookValue">每股净值</Link>
            </div>
            <div className="w-full h-20 flew-col justify-start">
              <BackpackIcon className="ml-4"/>
              <Link href="/lossProfit">损益表</Link>
            </div>
            <div className="w-full h-20 flew-col justify-start">
              <BackpackIcon className="ml-4"/>
              <Link href="/totalAssets">总资产</Link>
            </div>
            <div className="h-20 flew-col justify-start w-48">
              <BackpackIcon className="ml-4"/>
              <Link href="/liability">负债和股东权益</Link>
            </div>
            <div className="w-full h-20 flew-col justify-start">
              <BackpackIcon className="ml-4"/>
              <Link href="/cashFlow">现金流量表</Link>
            </div>
            <div className="w-full h-20 flew-col justify-start">
              <BackpackIcon className="ml-4"/>
              <Link href="/dividend">股利政策</Link>
            </div>
            <div className="w-full h-20 flew-col justify-start">
              <BackpackIcon className="ml-4"/>
              <Link href="/ebook">电子书</Link>
            </div>
          </div>
          
          <div className="h-screen w-full bg-gray-100">
            {children}
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
