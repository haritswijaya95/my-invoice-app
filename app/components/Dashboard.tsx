"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import InvoiceCard from "./InvoiceCard";

export default function Dashboard() {
  // State untuk menyimpan wilayah yang dipilih
  const [selectedRegion, setSelectedRegion] = useState<string>("Semua Wilayah");

  // Handler untuk mengubah region
  const handleSelectRegion = (regionName: string) => {
    setSelectedRegion(regionName);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar: Pastikan Sidebar menerima prop onSelectRegion 
        dan memanggilnya dengan string nama wilayah.
      */}
      <Sidebar onSelectRegion={handleSelectRegion} selectedRegion={selectedRegion} />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Dashboard Invoice
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-slate-500">Tujuan Pengiriman:</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide border border-indigo-100">
                {selectedRegion}
              </span>
            </div>
          </header>

          {/* InvoiceCard akan otomatis re-render saat selectedRegion berubah */}
          <section className="animate-in fade-in duration-500">
            <InvoiceCard regionName={selectedRegion} />
          </section>
        </div>
      </main>
    </div>
  );
}