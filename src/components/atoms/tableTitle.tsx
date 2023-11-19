import React from "react";

type TableTitleHeaderProps = {
  title: string;
  className?: string;
};

export const TableTitleHeader = ({
  title,
  className,
}: TableTitleHeaderProps) => {
  return (
    <th scope="col" className={`font-bold px-6 py-3 ${className}`}>
      {title}
    </th>
  );
};
