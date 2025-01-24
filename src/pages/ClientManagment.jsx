// Component
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addClient,updateClient,deleteClient} from '../redux/actions/clientsActions';

const ClientManagement = () => {
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clients);
    const [newClient, setNewClient] = useState({
      name: '',
      email: '',
      address: '',
      phone: '',
    });
    const [editingClient, setEditingClient] = useState(null);
  
    const handleAddClient = () => {
      dispatch(addClient({ id: clients.length + 1, ...newClient }));
      setNewClient({ name: '', email: '', address: '', phone: '' });
    };
  
    const handleUpdateClient = () => {
      dispatch(updateClient(editingClient));
      setEditingClient(null);
    };
  
    const handleDeleteClient = (id) => {
      if (window.confirm('Are you sure you want to delete this client?')) {
        dispatch(deleteClient(id));
      }
    };
  
    return (
      <div>
        <h2>Client Management</h2>
  
        {/* Add Client */}
        <div>
          <h3>Add Client</h3>
          <input
            type="text"
            placeholder="Name"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newClient.email}
            onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            value={newClient.address}
            onChange={(e) => setNewClient({ ...newClient, address: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={newClient.phone}
            onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
          />
          <button onClick={handleAddClient}>Add Client</button>
        </div>
  
        {/* Client List */}
        <div>
          <h3>Client List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.address}</td>
                  <td>{client.phone}</td>
                  <td>
                    <button onClick={() => setEditingClient(client)}>Edit</button>
                    <button onClick={() => handleDeleteClient(client.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Edit Client */}
        {editingClient && (
          <div>
            <h3>Edit Client</h3>
            <input
              type="text"
              placeholder="Name"
              value={editingClient.name}
              onChange={(e) =>
                setEditingClient({ ...editingClient, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={editingClient.email}
              onChange={(e) =>
                setEditingClient({ ...editingClient, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Address"
              value={editingClient.address}
              onChange={(e) =>
                setEditingClient({ ...editingClient, address: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Phone"
              value={editingClient.phone}
              onChange={(e) =>
                setEditingClient({ ...editingClient, phone: e.target.value })
              }
            />
            <button onClick={handleUpdateClient}>Update Client</button>
            <button onClick={() => setEditingClient(null)}>Cancel</button>
          </div>
        )}
      </div>
    );
  };
  
  export default ClientManagement;