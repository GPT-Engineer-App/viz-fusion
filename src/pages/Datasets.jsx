import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DatasetPopup from '../components/DatasetModal';

const Datasets = () => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const savedDatasets = JSON.parse(localStorage.getItem('datasets') || '[]');
    setDatasets(savedDatasets);
  }, []);

  const handleSaveHeaders = (datasetName, newHeaders) => {
    const updatedDatasets = datasets.map(dataset => 
      dataset.name === datasetName 
        ? { ...dataset, headers: newHeaders }
        : dataset
    );
    setDatasets(updatedDatasets);
    localStorage.setItem('datasets', JSON.stringify(updatedDatasets));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Uploaded Datasets</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datasets.map((dataset, index) => (
            <TableRow key={index}>
              <TableCell>{dataset.name}</TableCell>
              <TableCell>{new Date(dataset.uploadDate).toLocaleString()}</TableCell>
              <TableCell>
                <DatasetPopup
                  dataset={dataset}
                  onSaveHeaders={(newHeaders) => handleSaveHeaders(dataset.name, newHeaders)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Datasets;