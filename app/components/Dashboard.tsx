"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import InvoiceCard from "./invoiceCard";

export default function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState("Semua Wilayah");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar dipanggil di sini, di dalam Client Component */}
      <Sidebar onSelectRegionAction={(name) => setSelectedRegion(name)} />

      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard Invoice</h1>
            <p className="text-slate-500">
              Tujuan Pengiriman: <span className="font-bold text-indigo-600 uppercase">{selectedRegion}</span>
            </p>
          </header>

          <InvoiceCard regionName={selectedRegion} />
        </div>
      </main>
    </div>
  );
}