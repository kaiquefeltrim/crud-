export const TableRow = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Apple MacBook Pro 17"
      </th>
      <td className="px-6 py-4">Silver</td>
      <td className="px-6 py-4">Laptop</td>
      <td className="px-6 py-4">$2999</td>
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
