import PageMeta from '../../components/PageMeta';

import { Table, TableHeader, TableBody, TableCell, TableHead, TableRow, } from '../../components/table/Table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import Checkbox from '../../components/ui/Checkbox';

import { Check } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/Select';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/Avatar';

const Settigns = () => {
  return (
    <>
      <PageMeta title={"Settings"} description={"Settings"} />

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
          <span className="font-semibold text-lg">Checkbox</span>
          <div className="flex flex-row items-center flex-wrap gap-1">
            <Checkbox />
            <Checkbox checked/>
            <Checkbox disabled/>
            <Checkbox checked disabled/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Spinners</span>
          <div className="flex flex-row items-center flex-wrap gap-1">
            <Spinner color="primary" size="tiny" />
            <Spinner color="secondary" size="small" />
            <Spinner color="success" size="medium" />
            <Spinner color="danger" size="large" />
            <Spinner color="warning" size="xl" />
            <Spinner color="info" size="xxl" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Buttons</span>
          <div className="flex flex-row items-center flex-wrap gap-1">
            <Button color="primary" className="w-fit">Primary</Button>
            <Button color="secondary" size="small" className="w-fit">Secondary</Button>
            <Button color="success" size="large" icon={Check} className="w-fit">Success</Button>
            <Button color="danger" loading loadingColor="white" className="w-fit">Loading...</Button>
            <Button color="success" loading loadingColor="white" className="w-fit"></Button>
            <Button color="warning" disabled className="w-fit">Disabled</Button>
            <Button color="info" icon={Check} iconPosition="end" className="w-fit">With Icon</Button>
            <Button color="transparent" icon={Check} iconPosition="start" className="w-fit">With Icon</Button>
            <Button type="icon" color="success" size="small" icon={Check}></Button>
            <Button type="icon" color="danger" size="medium" icon={Check}></Button>
            <Button type="icon" color="warning" size="large" icon={Check}></Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Tabs</span>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Content 1</TabsContent>
            <TabsContent value="tab2">Content 2</TabsContent>
            <TabsContent value="tab3">Content 3</TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Select</span>
          <Select defaultValue="light">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="w-[180px]">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Avatar</span>
          <div className="flex items-center gap-2">
            <Avatar size="small">
              <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <Avatar size="medium">
              <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <Avatar size="large">
              <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  )
}
    
export default Settigns;
      