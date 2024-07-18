import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const DataUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === "text/csv" || selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        setFile(selectedFile);
        setError(null);
      } else {
        setFile(null);
        setError("Please upload a CSV or Excel file.");
      }
    }
  };

  const handleUpload = () => {
    if (file) {
      // Here you would typically send the file to a server
      console.log("Uploading file:", file.name);
      setSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError("Please select a file to upload.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Data Upload</h2>
      <div className="max-w-md">
        <Label htmlFor="file-upload">Choose a CSV or Excel file</Label>
        <Input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept=".csv,.xlsx"
          className="mt-1"
        />
        {file && <p className="mt-2 text-sm text-gray-500">Selected file: {file.name}</p>}
        <Button onClick={handleUpload} className="mt-4">
          Upload
        </Button>
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>File uploaded successfully!</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default DataUpload;