"use client";

import React from 'react';

// INI BAGIAN PENTING: Mendefinisikan apa saja yang boleh dikirim ke Sidebar
interface SidebarProps {
  onSelectRegion: (name: string) => void; // Fungsi untuk mengubah wilayah
  selectedRegion: string;                // String wilayah yang sedang aktif
}

export default function Sidebar({ onSelectRegion, selectedRegion }: SidebarProps) {
  const regions = ["Semua Wilayah", "Jakarta", "Bandung", "Surabaya"];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-4">
      <nav className="space-y-2">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onSelectRegion(region)} // Memanggil fungsi saat diklik
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedRegion === region
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {region}
          </button>
        ))}
      </nav>
    </aside>
  );
}