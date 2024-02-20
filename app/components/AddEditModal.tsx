"use client";
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddEditForm from './AddEditForm';

// コンポーネント名を AddEditModal に変更して、その機能をより正確に反映
export default function AddEditModal() {
  const [modal, setModal] = useState(false); // モーダルの開閉状態を管理

  // モーダルの表示状態を切り替える関数
  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* モーダルを開くためのボタン */}
      <Button onClick={toggle}>
        ボタン
      </Button>
      {/* モーダルコンポーネント */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>タイトル</ModalHeader>
        <ModalBody>
        <AddEditForm />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            実行
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            キャンセル
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}