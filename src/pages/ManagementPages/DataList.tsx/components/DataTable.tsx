import search from "/icons/search.svg";
import { useState, useMemo } from "react";

export interface HeaderColumn {
  key: string;
  label: string;
  type: "string" | "boolean";
  searchable?: boolean;
}

interface TableProps {
  headers: HeaderColumn[];
  data: Record<string, any>[];
  title: string;
  onClickRow: (rowId: number | string) => void;
}

function DataTable({ headers, data, title, onClickRow }: TableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchableKeys = headers.filter((h) => h.searchable).map((h) => h.key);

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    return data.filter((item) =>
      searchableKeys.some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div className="flex flex-col h-full justify-between items-end w-full">
      <div className="flex flex-col w-full p-6">
        <div className="flex items-center justify-between mb-4 w-full">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex relative">
            <img className="absolute top-2 left-2" src={search} alt="search" />
            <input
              type="text"
              placeholder="Rechercher"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 pl-10 w-52 border-gray-200 outline-primary border rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full overflow-x-scroll lg:overflow-hidden">
          <table className="w-full text-left overflow-hidden">
            <thead className="w-full overflow-scroll">
              <tr className="border-b border-gray-200 w-full">
                {headers.map((header) => (
                  <th
                    key={header.key}
                    className="py-2 text-nowrap font-semibold px-2 text-sm text-gray-400"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  onClick={() => onClickRow(row.id)}
                  className="border-b border-gray-200 hover:bg-primary/5 cursor-pointer"
                >
                  {headers.map((col) => (
                    <td key={col.key} className="py-4 px-2">
                      {col.type === "boolean" ? (
                        <span
                          className={`text-xs px-2 w-16 inline-flex items-center justify-center py-1 rounded-md font-semibold border-2 ${
                            row[col.key]
                              ? "bg-usual_green/20 text-usual_green"
                              : "bg-usual_red/20 text-usual_red"
                          }`}
                        >
                          {row[col.key] ? "Oui" : "Non"}
                        </span>
                      ) : (
                        <span className="text-xs text-nowrap font-semibold text-gray-700">
                          {row[col.key]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>Pagination</div>
    </div>
  );
}

export default DataTable;
