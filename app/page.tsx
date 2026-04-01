"use client"; 

import { useState } from "react";
import Sidebar from "./components/Sidebar"; 
import InvoiceCard from "./components/InvoiceCard";

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState("Semua Wilayah");

  const handleSelectRegion = (name: string) => {
    setSelectedRegion(name);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Tambahkan prop selectedRegion di sini agar Sidebar tahu mana yang aktif */}
      <Sidebar 
        onSelectRegion={handleSelectRegion} 
        selectedRegion={selectedRegion} 
      />

      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard Invoice</h1>
            <p className="text-slate-500">
              Tujuan Pengiriman: <span className="font-bold text-indigo-600">{selectedRegion}</span>
            </p>
          </header>

          <InvoiceCard regionName={selectedRegion} />
        </div>
      </main>
    </div>
  );
}