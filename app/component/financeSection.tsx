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
import { Button } from "@mui/material";
import { Fragment } from "react";

export default function FinanceSection() {
  const financeSectionItems = [
    { id: "news", name: "最新动态", icon: AddchartIcon },
    { id: "stock_diagnosis", name: "股票诊断", icon: AdfScannerIcon },
    { id: "finance_statement", name: "财务报表", icon: BlindsClosedIcon },
    { id: "profitability", name: "获利能力", icon: AirlinesIcon },
    { id: "security_analysis", name: "安全性分析", icon: AirlineStopsIcon },
    { id: "growth_analysis", name: "成长性分析", icon: AdminPanelSettingsIcon },
    { id: "value_assessment", name: "价值评估", icon: AlignHorizontalLeftIcon },
    { id: "investor_chips", name: "董监与筹码", icon: AttachMoneyIcon },
    { id: "key_indicator", name: "关键指标", icon: AltRouteIcon },
    { id: "product_portfolio", name: "产品组合", icon: AssignmentLateIcon },
  ];

  const listItems = financeSectionItems.map((item) => {
    return (
        <Fragment key={item.id}>
      <div className="w-full h-20 flew-col tems-center">
        <item.icon className="ml-12" color="secondary" />
        <Button size="large" fullWidth color="retroRed">
          {item.name}
        </Button>
      </div>
    </Fragment>
    )
  });
  return (
    <div className="w-100 h-screen bg-gradient-to-r from-blue-500 to-blue-600 bg-opacity-70 flew-col items-center pt-20 pl-8">
      {listItems}
    </div>
  );
}
