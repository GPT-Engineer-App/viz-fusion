import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const templates = [
  { id: 1, title: "Bar Chart", description: "Visualize data with vertical bars" },
  { id: 2, title: "Pie Chart", description: "Show data as slices of a circular graph" },
  { id: 3, title: "Line Graph", description: "Display trends over time" },
  { id: 4, title: "Scatter Plot", description: "Show correlation between variables" },
  { id: 5, title: "Heatmap", description: "Represent data through color variations" },
  { id: 6, title: "Area Chart", description: "Visualize quantitative data over time" },
];

const Templates = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Visualization Templates</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                {template.title} Preview
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Use Template</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Templates;