import BackpackIcon from "@mui/icons-material/Backpack";
import Link from "next/link";
import { Fragment } from "react";

export default function StockFinance() {
  const modelItems = [
    { id: "monthly_revenue", name: "每月营收", route: "/chart" },
    { id: "value_per_value", name: "每股净值", route: "/bookValue" },
    { id: "profit_loss", name: "损益表", route: "/lossProfit" },
    { id: "total_assets", name: "总资产", route: "/totalAssets" },
    { id: "stockholder_equity", name: "负债和股东权益", route: "/liability" },
    { id: "cash_flow", name: "现金流量表", route: "/cashFlow" },
    { id: "dividend_policy", name: "股利政策", route: "/dividend" },
    { id: "ebook", name: "电子书", route: "/ebook" },
  ];

  const itemsList = modelItems.map((item) => {
    return (
      <Fragment key={item.id}>
        <div className="w-full h-20 flew-col justify-start">
          <BackpackIcon className="ml-4" />
          <Link href={item.route} prefetch>
            {item.name}
          </Link>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="h-screen bg-slate-300 flew-col items-center pt-20 pr-10">
      {itemsList}
    </div>
  );
}
