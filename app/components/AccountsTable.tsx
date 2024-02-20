// import {Table,Button} from 'reactstrap';
// export default function AccountTable() {
//   return (
//     <Table>
//       <thead>
//       <tr  className="table-warning">

//         <th>ID</th>
//         <th>氏名</th>
//         <th>Email</th>
//         <th>電話番号</th>
//         <th></th>
//       </tr>
//       </thead>
//       <tbody>
//       <td>1</td>
//       <td>丸山</td>
//       <td>Maru@gmail.com</td>
//       <td>000-0000-0000</td>
//       <td>
//       <Button>編集</Button>
//         <Button>削除</Button>
//       </td>
//       </tbody>
      
      
        
//     </Table>
//   );
// }

import { Table, Button } from 'reactstrap';

export default function AccountTable() {
  const handleEdit = () => {
    // Logic for editing an entry
  };

  const handleDelete = () => {
    // Logic for deleting an entry
  };

  return (
    <Table>
      <thead>
        <tr className="table-warning">
          <th scope="col">ID</th>
          <th scope="col">氏名</th>
          <th scope="col">Email</th>
          <th scope="col">電話番号</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>丸山</td>
          <td>Maru@gmail.com</td>
          <td>000-0000-0000</td>
          <td>
            <Button onClick={handleEdit} aria-label="Edit">編集</Button>
            <Button onClick={handleDelete} aria-label="Delete">削除</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}