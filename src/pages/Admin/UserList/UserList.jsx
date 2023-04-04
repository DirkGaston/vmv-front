import { useEffect, useState } from "react";
import { GetUsers, UpdateUser } from "../../../api/auth/auth";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await GetUsers();
      const users = res.data;
      setUsers(users);
    }

    fetchData();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    const response = await UpdateUser(userId, { role: newRole });
    console.group(response);
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Usuario
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.username}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">
                {(() => {
                  switch (user.role) {
                    case "guest":
                      return (
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleRoleChange(user.id, "student")}
                        >
                          Pasar a Estudiante
                        </button>
                      );
                    case "student":
                      return (
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleRoleChange(user.id, "guest")}
                        >
                          Pasar a Invitado
                        </button>
                      );
                    case "admin":
                    default:
                      return null;
                  }
                })()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
