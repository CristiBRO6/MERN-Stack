import { Table, TableHeader, TableBody, TableCell, TableHead, TableRow, } from '../../components/table/Table'
import Badge from '../../components/ui/Badge';

import { Check } from 'lucide-react';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';

const Settigns = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
        <span className="font-semibold text-lg">Table</span>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Badges</span>
          <div className="flex flex-row items-center flex-wrap gap-1">
            {[
              'processing', 'success', 'error', 'warning', 'magenta', 'red', 
              'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 
              'geekblue', 'purple', 'default'
            ].map((color) => (
              <Badge 
                key={color} 
                color={color} 
                bordered
                closable 
                icon={Check}
                onClick={() => alert(`${color} badge closed`)}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Spinners</span>
          <div className="flex flex-row items-center flex-wrap gap-1">
            <Spinner color="primary" size="tiny" />
            <Spinner color="success" size="small" />
            <Spinner color="danger" size="medium" />
            <Spinner color="warning" size="large" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Buttons</span>
          <div className="flex flex-row items-center flex-wrap gap-1">
            <Button color="primary" className="w-fit">Primary</Button>
            <Button color="secondary" size="small" className="w-fit">Secondary</Button>
            <Button color="success" size="large" icon={Check} className="w-fit">Success</Button>
            <Button color="danger" loading loadingColor="white" className="w-fit">Loading...</Button>
            <Button color="warning" disabled className="w-fit">Disabled</Button>
            <Button color="info" icon={Check} iconPosition="end" className="w-fit">With Icon</Button>
            <Button color="transparent" icon={Check} iconPosition="start" className="w-fit">With Icon</Button>
            <Button type="icon" color="success" size="small" icon={Check}></Button>
            <Button type="icon" color="danger" size="medium" icon={Check}></Button>
            <Button type="icon" color="warning" size="large" icon={Check}></Button>
          </div>
        </div>
      </div>
    </>
  )
}
    
export default Settigns;
      