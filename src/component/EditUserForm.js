import React, { useState } from "react";

const EditUserForm = ({ user, updateUser, closeEditForm }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before updating the user
    if (name && email && phone) {
      updateUser(user.id, { name, email, phone });
      closeEditForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Save</button>
      <button onClick={closeEditForm}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
