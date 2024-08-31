import { ReactElement } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CallIcon from "@mui/icons-material/Call";
import WifiIcon from "@mui/icons-material/Wifi";
import TvIcon from "@mui/icons-material/Tv";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
interface SidebarMenuItem {
  title: string;
  icon: ReactElement;
  link: string;
}

export const SidebarData: SidebarMenuItem[] = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Buy Airtime",
    icon: <CallIcon />,
    link: "/buyairtime",
  },
  {
    title: "Buy Data",
    icon: <WifiIcon />,
    link: "/buydata",
  },
  {
    title: "TV Subscription",
    icon: <TvIcon />,
    link: "/tvsub",
  },
  {
    title: "Pay Electric Bill",
    icon: <BoltOutlinedIcon />,
    link: "/payelectricalbill",
  },
  {
    title: "Airtime to Cash",
    icon: <LoopOutlinedIcon />,
    link: "/airtimetocash",
  },
  {
    title: "Transaction History",
    icon: <ReceiptLongOutlinedIcon />,
    link: "/transactionhistory",
  },
  {
    title: "Help & Support",
    icon: <SupportAgentOutlinedIcon />,
    link: "/helpcenter",
  },
];
