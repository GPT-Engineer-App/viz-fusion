import { LayoutTemplate, Wrench, Upload, BarChart } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import Builder from "./pages/Builder";
import DataUpload from "./pages/DataUpload";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <BarChart className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Templates",
    to: "/templates",
    icon: <LayoutTemplate className="h-4 w-4" />,
    page: <Templates />,
  },
  {
    title: "Builder",
    to: "/builder",
    icon: <Wrench className="h-4 w-4" />,
    page: <Builder />,
  },
  {
    title: "Data Upload",
    to: "/data-upload",
    icon: <Upload className="h-4 w-4" />,
    page: <DataUpload />,
  },
];