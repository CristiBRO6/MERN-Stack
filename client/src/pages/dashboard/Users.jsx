import DataTable from '../../components/DataTable';
import ColumnToggler from '../../components/table/ColumnToggler';

import Badge from '../../components/ui/Badge';

import { Ellipsis } from 'lucide-react';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableHiding: false,
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: (row, columnId, filterRoles) => {
      if (filterRoles.length === 0) return true;
      const role = row.getValue(columnId);
      return filterRoles.includes(role);
    },
    cell: ({ getValue }) => {
      const role = getValue();
      let color = 'default';
      
      switch (role) {
        case 0:
          color = 'default';
          break;
        case 1:
          color = 'error';
          break;
        case 2:
          color = 'gold';
          break;
        default:
          color = 'default';
          break;
      }
      
      return <Badge color={color}>{["User", "Admin", "Owner"][role]}</Badge>;
    },
  },
  {
    id: 'actions',
    header: ({ table }) => <ColumnToggler table={table} />,
    cell: () => (
      <Ellipsis className="size-4" />
    ),
    enableHiding: false,
    enableSorting: false,
    size: 64,
  }
];

const data = [
  { "id": "1", "name": "Jarod Kutch", "email": "Laurine16@gmail.com", "role": 1 },
  { "id": "2", "name": "Nola Sanford", "email": "Mario.Wisozk@test.com", "role": 2 },
  { "id": "3", "name": "Lawrence McKenzie", "email": "Kenneth_OKon@gmail.com", "role": 0 },
  { "id": "4", "name": "Andy Johnston", "email": "Sedrick39@gmail.com", "role": 1 },
  { "id": "5", "name": "Emmet Rice", "email": "Frederik.Morissette@exemple.com", "role": 1 },
  { "id": "6", "name": "Sophie Hilpert", "email": "Kira.Stamm53@gmail.com", "role": 1 },
  { "id": "7", "name": "Kailee Muller", "email": "Judd_Buckridge39@exemple.com", "role": 1 },
  { "id": "8", "name": "Russel Orn", "email": "Declan_Ledner34@test.com", "role": 0 },
  { "id": "9", "name": "Bud Hand-Kessler", "email": "Shanny_OConnell@exemple.com", "role": 0 },
  { "id": "10", "name": "Lexus Klein", "email": "Madie_Barrows84@gmail.com", "role": 0 },
  { "id": "11", "name": "Percy Kunze", "email": "Albertha_Hyatt@exemple.com", "role": 0 },
  { "id": "12", "name": "Cleta Kohler", "email": "Mafalda49@yahoo.com", "role": 0 },
  { "id": "13", "name": "Bethel Franey", "email": "Chadrick.Nienow@yahoo.com", "role": 1 },
  { "id": "14", "name": "Kenny Stoltenberg", "email": "Angelo93@test.com", "role": 2 },
  { "id": "15", "name": "Zora Russel", "email": "Zola66@gmail.com", "role": 2 },
  { "id": "16", "name": "Elvis Fadel", "email": "Kellen68@exemple.com", "role": 1 },
  { "id": "17", "name": "Casandra Lang", "email": "Torey_Mueller22@mail.com", "role": 1 },
  { "id": "18", "name": "Ignacio Bode", "email": "Camden_Mayert24@mail.com", "role": 1 },
  { "id": "19", "name": "Shawn Koelpin", "email": "Jeff_Bashirian43@test.com", "role": 0 },
  { "id": "20", "name": "Lawson Beahan", "email": "Anderson47@gmail.com", "role": 2 },
  { "id": "21", "name": "Bennie Feeney", "email": "Gordon67@test.com", "role": 1 },
  { "id": "22", "name": "Christiana Johns", "email": "Naomie_Tremblay@yahoo.com", "role": 1 },
  { "id": "23", "name": "Dwight Marvin", "email": "Alessia.Wuckert34@yahoo.com", "role": 2 },
  { "id": "24", "name": "Donnie Swift", "email": "Serena.Goodwin@test.com", "role": 1 },
  { "id": "25", "name": "Marlene Corkery", "email": "Brenda.Kuhn18@mail.com", "role": 2 },
  { "id": "26", "name": "Jaleel Reichel", "email": "Estelle_Nikolaus21@gmail.com", "role": 0 },
  { "id": "27", "name": "Enos Swift", "email": "Myra69@mail.com", "role": 0 },
  { "id": "28", "name": "Rosalee Ondricka", "email": "William.Crona@test.com", "role": 1 },
  { "id": "29", "name": "Ephraim Hackett", "email": "Elinore32@mail.com", "role": 2 },
  { "id": "30", "name": "Mallie Reichert", "email": "Hermann_Goodwin-Mann47@exemple.com", "role": 0 },
  { "id": "31", "name": "Troy Schimmel", "email": "Eliane_Hudson@gmail.com", "role": 2 },
  { "id": "32", "name": "Blanca Swift-Balistreri", "email": "Sheila75@test.com", "role": 1 },
  { "id": "33", "name": "Christiana Smitham", "email": "Isabel_Friesen85@test.com", "role": 1 },
  { "id": "34", "name": "Jaida Terry", "email": "Elsa67@exemple.com", "role": 1 },
  { "id": "35", "name": "Roy Kshlerin", "email": "Zakary.Wehner49@gmail.com", "role": 1 },
  { "id": "36", "name": "Charlene Dare", "email": "Cristina61@yahoo.com", "role": 1 },
  { "id": "37", "name": "Augustine Spencer", "email": "Aliyah_Goldner73@mail.com", "role": 2 },
  { "id": "38", "name": "Gwen O'Conner", "email": "Colin.McCullough71@mail.com", "role": 2 },
  { "id": "39", "name": "Harvey Murphy", "email": "Estevan.Berge12@gmail.com", "role": 1 },
  { "id": "40", "name": "Christy Stroman", "email": "Stewart.Swift82@gmail.com", "role": 1 },
  { "id": "41", "name": "Kory Glover", "email": "Marcus6@test.com", "role": 1 },
  { "id": "42", "name": "Filiberto Goyette", "email": "Bettie.OConnell30@mail.com", "role": 2 },
  { "id": "43", "name": "Kelli Hayes", "email": "Rory78@mail.com", "role": 2 },
  { "id": "44", "name": "Cary Schowalter", "email": "Erna.Stoltenberg@test.com", "role": 0 },
  { "id": "45", "name": "Annie Barrows", "email": "Demetris_Turcotte27@exemple.com", "role": 2 },
  { "id": "46", "name": "Jermaine Harvey", "email": "Carolina_OKeefe@mail.com", "role": 0 },
  { "id": "47", "name": "Ines Abernathy", "email": "Trenton.Casper@test.com", "role": 1 },
  { "id": "48", "name": "Claud Torphy", "email": "Rafaela91@exemple.com", "role": 2 },
  { "id": "49", "name": "Mose Harris", "email": "Maggie59@test.com", "role": 1 },
  { "id": "50", "name": "Zack Corwin", "email": "Reinhold3@exemple.com", "role": 1 },
  { "id": "51", "name": "Magali Volkman", "email": "Melyna_Krajcik@test.com", "role": 2 },
  { "id": "52", "name": "Isadore Lindgren", "email": "Dangelo27@mail.com", "role": 2 },
  { "id": "53", "name": "Marianna Dickinson", "email": "Ransom.Johns@test.com", "role": 0 },
  { "id": "54", "name": "Myrl Konopelski", "email": "Velda_Schmitt@test.com", "role": 2 },
  { "id": "55", "name": "Lauren Jast", "email": "Kiley.Kessler@yahoo.com", "role": 2 }
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
            paginationOptions={
              {
                pagination: true,
                currentPage: 0,
                pageSize: 10,
                pageSizeOptions: [10, 20, 30, 40, 50]
              }
            }
          />
        </div>
      </>
    )
  }
      
  export default Users;
      