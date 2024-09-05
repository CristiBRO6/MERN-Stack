import DataTable from '../../components/ui/DataTable';
import Dropdown from '../../components/ui/Dropdown';
import IconButton from '../../components/ui/IconButton';

import { Settings2, Ellipsis } from 'lucide-react';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableHiding: false,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    id: 'actions',
    header: ({ table }) => (
      <Dropdown 
        className="w-fit"
        placement="bottom"
        menu={
          <Dropdown.Content>
            <Dropdown.Body className='px-2'>
              <Dropdown.Group title="Columns">
                {table.getAllColumns().filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide()).map((column) => (
                  column.getCanHide() && (
                    <>
                      <label key={column.id} className="flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-200">
                        <input
                          checked={column.getIsVisible()}
                          onChange={column.getToggleVisibilityHandler()}
                          type="checkbox"
                          className="form-checkbox h-3 w-3 text-gray-600 transition-colors duration-200"
                        />
                        <span className={`text-sm`}>
                          {column.columnDef.header}
                        </span>
                      </label>
                    </>
                  )
                ))}
              </Dropdown.Group>
            </Dropdown.Body>
          </Dropdown.Content>
        }
      >
        <IconButton icon={Settings2} />
      </Dropdown>
    ),
    cell: () => (
      <Ellipsis className="size-4" />
    ),
    enableHiding: false,
    enableSorting: false,
    size: 64,
  }
];

const data = [
  { id: 1, name: 'Ion Popescu', email: 'ionpopescu@yahoo.com', role: 'Admin' },
  { id: 2, name: 'Maria Ionescu', email: 'ionescu12@gmail.com', role: 'User' },
  { id: 3, name: 'Ana Georgescu', email: 'anageo00@exemple.com', role: 'User' },
  { id: 4, name: 'Andrei Mihai', email: 'andreimihai@yahoo.com', role: 'User' },
  { id: 5, name: 'Elena Vasilescu', email: 'elenavas@gmail.com', role: 'Admin' },
  { id: 6, name: 'Cristina Popa', email: 'cristina.popa@yahoo.com', role: 'User' },
  { id: 7, name: 'Gabriel Dinu', email: 'gabrieldinu@mail.com', role: 'User' },
  { id: 8, name: 'Florin Ilie', email: 'florinilie@gmail.com', role: 'Admin' },
  { id: 9, name: 'Roxana Pavel', email: 'roxanapavel@mail.com', role: 'User' },
  { id: 10, name: 'Mihai Ene', email: 'mihai.ene@gmail.com', role: 'User' },
  { id: 11, name: 'Oana Dragomir', email: 'oanadrago@yahoo.com', role: 'User' },
  { id: 12, name: 'George Tudor', email: 'georgetudor@exemple.com', role: 'Admin' },
  { id: 13, name: 'Simona Vasile', email: 'simonavasile@gmail.com', role: 'User' },
  { id: 14, name: 'Alexandru Radu', email: 'alexradu@mail.com', role: 'User' },
  { id: 15, name: 'Bianca Stan', email: 'bianca.stan@mail.com', role: 'Admin' },
  { id: 16, name: 'Claudiu Florescu', email: 'claudflor@gmail.com', role: 'User' },
  { id: 17, name: 'Diana Petrescu', email: 'dianapetrescu@yahoo.com', role: 'User' },
  { id: 18, name: 'Victor Cazacu', email: 'victorcazacu@gmail.com', role: 'Admin' },
  { id: 19, name: 'Alina Grigorescu', email: 'alina.grigo@mail.com', role: 'User' },
  { id: 20, name: 'Radu Neagu', email: 'raduneagu@yahoo.com', role: 'User' },
  { id: 21, name: 'Camelia Oprea', email: 'cameliaoprea@gmail.com', role: 'User' },
  { id: 22, name: 'Dan Preda', email: 'dan.preda@mail.com', role: 'Admin' },
  { id: 23, name: 'Iulia Barbu', email: 'iulia.barbu@mail.com', role: 'User' },
  { id: 24, name: 'Marius Toma', email: 'mariustoma@gmail.com', role: 'User' },
  { id: 25, name: 'Sorina Nistor', email: 'sorinanistor@mail.com', role: 'Admin' },
  { id: 26, name: 'Emanuel Ivan', email: 'emanuel.ivan@gmail.com', role: 'User' },
  { id: 27, name: 'Irina Olaru', email: 'irina.olaru@gmail.com', role: 'User' },
  { id: 28, name: 'Valentin Dobre', email: 'valentindobre@yahoo.com', role: 'User' },
  { id: 29, name: 'Laura Cristea', email: 'lauracrist@yahoo.com', role: 'Admin' },
  { id: 30, name: 'Adrian Iacob', email: 'adrian.iacob@mail.com', role: 'User' },
];


const Users = () => {
    return (
      <>
        <div className="container mx-auto">
          <h1 className="text-xl font-bold mb-4">Users</h1>
          <DataTable 
            columns={columns}
            data={data} 
            columnVisibility={
              {
                name: true,
                email: true,
                role: true,
              }
            }
            pagination={true} 
            pageSizeOptions={[10, 20, 30, 40, 50]}
          />
        </div>
      </>
    )
  }
      
  export default Users;
      