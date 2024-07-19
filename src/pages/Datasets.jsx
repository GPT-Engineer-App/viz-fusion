import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DatasetModal from '../components/DatasetModal';

const Datasets = () => {
  const [datasets, setDatasets] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedDatasets = JSON.parse(localStorage.getItem('datasets') || '[]');
    setDatasets(savedDatasets);
  }, []);

  const handleDatasetClick = (dataset) => {
    setSelectedDataset(dataset);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDataset(null);
  };

  const handleSaveHeaders = (newHeaders) => {
    const updatedDatasets = datasets.map(dataset => 
      dataset.name === selectedDataset.name 
        ? { ...dataset, headers: newHeaders }
        : dataset
    );
    setDatasets(updatedDatasets);
    localStorage.setItem('datasets', JSON.stringify(updatedDatasets));
    handleCloseModal();
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
                <Button onClick={() => handleDatasetClick(dataset)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedDataset && (
        <DatasetModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          dataset={selectedDataset}
          onSaveHeaders={handleSaveHeaders}
        />
      )}
    </div>
  );
};

export default Datasets;