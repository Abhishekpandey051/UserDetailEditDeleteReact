import React, { useState } from "react";
import AddUserForm from "./component/AddUserForm";
import UserList from "./component/UserList";
import EditUserForm from "./component/EditUserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now().toString() };
    setUsers([...users, newUser]);
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setShowEditForm(true);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const closeEditForm = () => {
    setShowEditForm(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <AddUserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
      {showEditForm && (
        <EditUserForm
          user={selectedUser}
          updateUser={updateUser}
          closeEditForm={closeEditForm}
        />
      )}
    </div>
  );
};

export default App;
