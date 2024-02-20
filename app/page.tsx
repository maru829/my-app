import AddEditModal from "./components/AddEditModal";
import AddEditForm from "./components/AddEditForm";
import AccountTable from "./components/AccountsTable";
export default function Home() {
  return (
    <main>
       <h1>ユーザー管理アプリケーション</h1>
       <AddEditModal />
       <AccountTable />
    </main>
  );
}
