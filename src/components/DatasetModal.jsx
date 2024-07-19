import { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const DatasetPopup = ({ dataset, onSaveHeaders }) => {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (dataset) {
      setHeaders(dataset.headers || []);
      setData(dataset.data || []);
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
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Preview Dataset</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[800px] p-0">
        <div className="p-4 space-y-4">
          <h2 className="text-lg font-semibold">{dataset?.name} - Preview</h2>
          <ScrollArea className="h-[400px] overflow-auto">
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
                {data.slice(0, 1000).map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {headers.map((header, cellIndex) => (
                      <TableCell key={cellIndex}>{row[header]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => setIsOpen(false)} variant="outline">Cancel</Button>
            <Button onClick={handleSave}>Save Headers</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DatasetPopup;