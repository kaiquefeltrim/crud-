// TableRow.jsx
import React from 'react';

interface DadosDaLinha {
  cliente: string;
  data: string;
  email: string;
  celular: string;
}

const TableRow: React.FC<{ dados: DadosDaLinha }> = ({ dados }) => {
  return (
    <tr id="row" className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {dados.cliente}
      </th>
      
      <td className="px-6 py-4">{dados.data}</td>
      <td className="px-6 py-4">{dados.email}</td>
      <td className="px-6 py-4">{dados.celular}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        </td>
    </tr>
  );
};

export default TableRow;