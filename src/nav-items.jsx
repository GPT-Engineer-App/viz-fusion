import { BarChart, PieChart, Upload } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import BarChartPage from "./pages/BarChart";
import PieChartPage from "./pages/PieChart";
import DataUpload from "./pages/DataUpload";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <BarChart className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Bar Chart",
    to: "/bar-chart",
    icon: <BarChart className="h-4 w-4" />,
    page: <BarChartPage />,
  },
  {
    title: "Pie Chart",
    to: "/pie-chart",
    icon: <PieChart className="h-4 w-4" />,
    page: <PieChartPage />,
  },
  {
    title: "Data Upload",
    to: "/data-upload",
    icon: <Upload className="h-4 w-4" />,
    page: <DataUpload />,
  },
];