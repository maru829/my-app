// import { useState} from 'react';
// import {Form,FormGroup,Label,Input} from 'reactstrap';

// export default function AddEditModal() {
//   return (

//   <Form>
//     <FormGroup>
//       <Label for="fullname">氏名</Label>
//       <Input type="text"
//       name="fullname"
//       id="fullname"
//       placeholder="fullname"></Input>
//     </FormGroup>

//     <FormGroup>
//       <Label for="email">Email</Label>
//       <Input type="email"
//       name="email"
//       id="email"
//       placeholder="email"></Input>
//     </FormGroup>

//     <FormGroup>
//       <Label for="number">電話番号</Label>
//       <Input type="text"
//       name="number"
//       id="number"
//       placeholder="number"></Input>
//     </FormGroup>
// <button>
//   確定
// </button>
//   </Form>


//   );
// }
import {Form,FormGroup,Label,Input} from 'reactstrap';

export default function AddEditModal() {
  return (
    <Form>
      <FormGroup>
        <Label for="fullname">氏名</Label>
        <Input type="text"
        name="fullname"
        id="fullname"
        placeholder="fullname" />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email"
        name="email"
        id="email"
        placeholder="email" />
      </FormGroup>

      <FormGroup>
        <Label for="number">電話番号</Label>
        <Input type="text"
        name="number"
        id="number"
        placeholder="number" />
      </FormGroup>
    </Form>
  );
}