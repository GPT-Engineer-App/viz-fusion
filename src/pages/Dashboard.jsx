import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Data Visualization Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>Visualize data with bar charts</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for bar chart preview */}
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
              Bar Chart Preview
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pie Chart</CardTitle>
            <CardDescription>Display data in a circular graph</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for pie chart preview */}
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
              Pie Chart Preview
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Upload</CardTitle>
            <CardDescription>Upload and visualize your data</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for data upload preview */}
            <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
              Data Upload
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;