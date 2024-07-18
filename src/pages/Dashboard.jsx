import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Data Visualization Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Templates</CardTitle>
            <CardDescription>Choose from various visualization templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center mb-4">
              Templates Preview
            </div>
            <Button asChild className="w-full">
              <Link to="/templates">Explore Templates</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Builder</CardTitle>
            <CardDescription>Create custom visualizations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center mb-4">
              Builder Preview
            </div>
            <Button asChild className="w-full">
              <Link to="/builder">Go to Builder</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Upload</CardTitle>
            <CardDescription>Upload and visualize your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center mb-4">
              Data Upload
            </div>
            <Button asChild className="w-full">
              <Link to="/data-upload">Upload Data</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;