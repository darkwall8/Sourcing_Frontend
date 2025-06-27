import { useState } from "react";

export interface HeaderColumn {
  key: string;
  label: string;
  type: "string" | "date";
}

interface TableProps {
  headers: HeaderColumn[];
  data: Record<string, any>[];
  onSelectionChange?: (selectedIds: any[]) => void; // facultatif
}

function DataTable({ headers, data, onSelectionChange }: TableProps) {
  const [selectedIds, setSelectedIds] = useState<any[]>([]);

  const handleCheckboxChange = (id: any) => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter((i) => i !== id)
      : [...selectedIds, id];

    setSelectedIds(updated);
    onSelectionChange?.(updated); // callback vers le parent si défini
  };

  return (
    <div className="flex flex-col h-full justify-between items-end w-full">
      <div className="flex flex-col w-full p-3">
        <div className="flex flex-col gap-8 w-full overflow-x-scroll lg:overflow-hidden">
          <table className="w-full overflow-hidden">
            <thead className="w-full">
              <tr className="w-full text-left">
                <th className="py-1 xl:py-2 px-2"></th> {/* Colonne checkbox */}
                {headers.map((header) => (
                  <th
                    key={header.key}
                    className="text-nowrap font-light text-xs 2xl:text-base text-[#A3AED0] py-1 px-2"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {data.map((row, rowIndex) => {
                const rowId = row.id || row.Name || rowIndex; // Fallback si pas d’id
                return (
                  <tr key={rowId}>
                    <td className="py-1 xl:py-2 px-2">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(rowId)}
                        onChange={() => handleCheckboxChange(rowId)}
                        className="accent-primary"
                      />
                    </td>
                    {headers.map((col) => (
                      <td key={col.key} className="py-1 xl:py-2 px-2">
                        <span className="text-[10px] 2xl:text-sm text-nowrap font-semibold text-[#2B3674]">
                          {row[col.key]}
                        </span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
