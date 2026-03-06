"use client";

import { useEffect, useState } from "react";

interface Region {
  id: string | number;
  name: string;
}

export default function RegionTable({ 
  onSelectRegionAction 
}: { 
  onSelectRegionAction: (name: string) => void 
}) {
  const [regions, setRegions] = useState<Region[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch('/data/indonesia_regions.json');
        if (!response.ok) throw new Error('Gagal memuat data wilayah');
        const data = await response.json();
        setRegions(Array.isArray(data) ? data : []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRegions();
  }, []);

  if (isLoading) return <div className="p-4 text-center animate-pulse text-slate-500 text-sm">Mengambil data wilayah...</div>;
  if (error) return <div className="p-4 text-red-500 bg-red-50 rounded text-xs">Error: {error}</div>;

  return (
    <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
      <table className="min-w-full table-auto">
        <thead className="bg-slate-800 text-white text-[10px]">
          <tr>
            <th className="px-3 py-2 text-left font-semibold uppercase">ID</th>
            <th className="px-3 py-2 text-left font-semibold uppercase">Nama Wilayah</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {/* --- BARIS TAMBAHAN: PILIH SEMUA WILAYAH --- */}
          <tr 
            onClick={() => onSelectRegionAction("Semua Wilayah")}
            className="bg-indigo-50/50 hover:bg-indigo-100 transition-colors cursor-pointer font-bold text-indigo-700"
          >
            <td className="px-3 py-3 text-sm italic text-center">ALL</td>
            <td className="px-3 py-3 text-sm uppercase">🌍 Pilih Semua Wilayah</td>
          </tr>

          {/* --- DATA DARI JSON --- */}
          {regions.length > 0 ? (
            regions.map((region) => (
              <tr 
                key={region.id} 
                onClick={() => onSelectRegionAction(region.name)}
                className="hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <td className="px-3 py-2 text-xs font-mono text-slate-400">{region.id}</td>
                <td className="px-3 py-2 text-sm text-slate-700">{region.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="px-4 py-8 text-center text-gray-400 text-sm">
                Tidak ada data tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}