import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  // This state would be managed by your app's global state management solution
  const hasUploadedData = false;
  const selectedTemplate = null;

  if (!hasUploadedData || !selectedTemplate) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>Upload data and select a template to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <p>To visualize your data:</p>
            <ol className="list-decimal list-inside mt-2">
              <li>Go to the Data Upload page and upload your dataset</li>
              <li>Visit the Templates page and choose a visualization template</li>
              <li>Return to this Dashboard to see your visualized data</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    );
  }

  // This part would be populated with the actual visualization component
  // based on the selected template and uploaded data
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>{selectedTemplate} Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for the actual visualization component */}
          <div className="h-96 bg-gray-200 rounded flex items-center justify-center">
            Visualization will be displayed here
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;