
import TableRow from "../atoms/tableRow";
import { TableTitleHeader } from "../atoms/tableTitle";
import { Cadastro } from "../modal/modal";
import React, { useState } from "react";

interface DadosCliente {
  cliente: string;
  data: string;
  email: string;
  celular: string;
}

export const TableClient = () => {

  const [dadosClientes, setDadosClientes] = useState<DadosCliente[]>([]);

  const handleSalvarDados = (dadosFormulario: DadosCliente) => {
    setDadosClientes([...dadosClientes, dadosFormulario]);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <Cadastro onSalvar={handleSalvarDados} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <TableTitleHeader title="Cliente" />
            <TableTitleHeader title="Data" />
            <TableTitleHeader title="Email" />
            <TableTitleHeader title="Celular" />
            <TableTitleHeader title="Ação" />
          </tr>
        </thead>
        <tbody>
          {dadosClientes.map((dados, indice) => (
            <TableRow key={indice} dados={dados} />
          ))}
        </tbody>
      </table>
      </div>
  );
};
