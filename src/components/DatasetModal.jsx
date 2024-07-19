import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const DatasetPopup = ({ dataset, onSaveHeaders }) => {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (dataset) {
      try {
        setHeaders(dataset.headers || []);
        setData(dataset.data || []);
        setError(null);
      } catch (err) {
        console.error("Error setting dataset:", err);
        setError("Error loading dataset. Please try again.");
      }
    }
  }, [dataset]);

  const handleHeaderChange = (index, value) => {
    const newHeaders = [...headers];
    newHeaders[index] = value;
    setHeaders(newHeaders);
  };

  const handleSave = () => {
    onSaveHeaders(headers);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Preview Dataset</Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[1000px] h-[90vh] max-h-[800px]">
        <DialogHeader>
          <DialogTitle>{dataset?.name} - Preview</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-full">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <>
              <ScrollArea className="flex-grow">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {headers.map((header, index) => (
                        <TableHead key={index}>
                          <Input
                            value={header}
                            onChange={(e) => handleHeaderChange(index, e.target.value)}
                            className="w-full"
                          />
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.slice(0, 100).map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {headers.map((header, cellIndex) => (
                          <TableCell key={cellIndex}>{row[header]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
              <div className="flex justify-end space-x-2 mt-4">
                <Button onClick={() => setIsOpen(false)} variant="outline">Cancel</Button>
                <Button onClick={handleSave}>Save Headers</Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DatasetPopup;