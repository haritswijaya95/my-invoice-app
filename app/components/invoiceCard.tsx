"use client";

import React from 'react';

interface InvoiceCardProps {
  regionName: string;
}

export default function InvoiceCard({ regionName }: InvoiceCardProps) {
  // Data dummy diletakkan di dalam komponen
  const invoiceData = {
    number: "INV0001",
    date: "2026-01-01",
    customer: { name: "Luna", email: "luna@example.com" },
    items: [
      { id: 1, name: "Pena Hitam", price: 10000, quantity: 1 },
      { id: 2, name: "Pensil", price: 5000, quantity: 2 }
    ],
    total: 20000
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/save-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          region: regionName, 
          total: invoiceData.total,
          items: invoiceData.items 
        }),
      });
      
      if (response.ok) alert("Berhasil disimpan ke database!");
    } catch (error) {
      console.error("Gagal menyimpan:", error);
    }
  };

  return (
    <div className="space-y-4">
      {/* Area yang akan dicetak menggunakan class print-section */}
      <div className="print-section bg-white p-8 rounded-2xl shadow-xl border border-slate-200 print:shadow-none print:border-none">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-black text-indigo-600 mb-1">INVOICE</h2>
            <p className="text-sm text-slate-400">#{invoiceData.number}</p>
          </div>
          <div className="text-right text-sm text-slate-500">
            <p>Tanggal: {invoiceData.date}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-b pb-6 mb-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Tujuan Pengiriman:</p>
            <p className="font-bold text-lg text-slate-800">{regionName}</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Pelanggan:</p>
            <p className="font-bold text-slate-800">{invoiceData.customer.name}</p>
            <p className="text-sm text-slate-500">{invoiceData.customer.email}</p>
          </div>
        </div>

        <table className="w-full mb-6">
          <thead>
            <tr className="text-left text-xs text-slate-400 border-b">
              <th className="pb-2">ITEM</th>
              <th className="pb-2 text-center">QTY</th>
              <th className="pb-2 text-right">HARGA</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {invoiceData.items.map(item => (
              <tr key={item.id} className="border-b border-slate-50">
                <td className="py-3 font-medium">{item.name}</td>
                <td className="py-3 text-center">{item.quantity}</td>
                <td className="py-3 text-right">Rp {item.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="text-right">
            <p className="text-sm text-slate-400">Total Pembayaran:</p>
            <p className="text-2xl font-black text-indigo-600">Rp {invoiceData.total.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Tombol Kontrol (Hidden saat print) */}
      <div className="flex gap-3 no-print">
        <button 
          onClick={handlePrint}
          className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-900 transition-all flex justify-center items-center gap-2"
        >
          <span>🖨️</span> Cetak Invoice
        </button>
        <button 
          onClick={handleSave}
          className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all"
        >
          💾 Simpan Data
        </button>
      </div>

      {/* CSS Khusus Print agar rapi */}
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          .print-section, .print-section * { visibility: visible; }
          .print-section { 
            position: absolute; 
            left: 0; 
            top: 0; 
            width: 100%; 
            padding: 0;
            margin: 0;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}