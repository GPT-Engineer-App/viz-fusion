import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Builder = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Visualization Builder</h1>
      <Card>
        <CardHeader>
          <CardTitle>Custom Visualization</CardTitle>
          <CardDescription>Build your own custom visualization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] bg-gray-200 rounded flex items-center justify-center">
            Builder Interface (To be implemented)
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Builder;