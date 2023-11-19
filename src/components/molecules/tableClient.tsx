import { TableRow } from "../atoms/tableRow";
import { TableTitleHeader } from "../atoms/tableTitle";

export const TableClient = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <TableTitleHeader title="Cliente" />
            <TableTitleHeader title="Data" />
            <TableTitleHeader title="Montante" />
            <TableTitleHeader title="Parcelas" />
            <TableTitleHeader title="Entregue" />
            <TableTitleHeader title="Ação" />
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};
