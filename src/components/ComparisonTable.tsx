import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Column {
  key: string;
  label: string;
}

interface ComparisonTableProps {
  columns: Column[];
  rows: Record<string, string>[];
}

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sorted = [...rows].sort((a, b) => {
    if (!sortKey) return 0;
    const cmp = (a[sortKey] || "").localeCompare(b[sortKey] || "", undefined, { numeric: true });
    return sortAsc ? cmp : -cmp;
  });

  return (
    <div className="overflow-x-auto rounded-lg border bg-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-secondary">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left font-medium cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSort(col.key)}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {sortKey === col.key && (sortAsc ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />)}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr key={i} className="border-b last:border-0 hover:bg-secondary/50 transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
