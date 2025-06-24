export interface HeaderColumn {
  key: string;
  label: string;
  type: "string" | "date";
}

interface TableProps {
  headers: HeaderColumn[];
  data: Record<string, any>[];
  title: string;
}

function DataTable({ headers, data }: TableProps) {

  return (
    <div className="flex flex-col h-full justify-between items-end w-full">
      <div className="flex flex-col w-full p-3">
        <div className="flex flex-col gap-8 w-full overflow-x-scroll lg:overflow-hidden">
          <table className="w-full overflow-hidden">
            <thead className="w-full">
              <tr className="w-full text-left">
                {headers.map((header) => (
                  <th
                    key={header.key}
                    className="text-nowrap font-light text-sm text-[#A3AED0] py-1 px-2"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                >
                  {headers.map((col) => (
                    <td key={col.key} className="py-1 px-2">
                        <span className="text-xs text-nowrap font-semibold text-[#2B3674]">
                          {row[col.key]}
                        </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
