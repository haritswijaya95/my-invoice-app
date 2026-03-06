import React from 'react';

interface Region {
  id: number;
  name: string;
}

async function getRegionData(): Promise<Region[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/data/indonesia_regions.json`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    return (await response.json()) as Region[];
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return []; 
  }
}

// 2. Komponen Utama
export default async function DashboardPage() {
  const regions = await getRegionData();
  
  const transaction = {
    id: 1,
    number: "INV0001",
    customer: {
      name: "Luna",
      province: regions.length > 0 ? regions[0].name : "Tidak Diketahui"
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-indigo-600">Dashboard Invoice</h1>
      
      <div className="bg-white shadow-md rounded-lg p-4 border border-slate-200">
        <p><strong>Nomor Invoice:</strong> {transaction.number}</p>
        <p><strong>Nama Pelanggan:</strong> {transaction.customer.name}</p>
        <p><strong>Wilayah:</strong> {transaction.customer.province}</p>
      </div>

      <h2 className="mt-6 font-semibold text-slate-700">Daftar Wilayah Terdeteksi:</h2>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        {/* Perbaikan Error TypeScript: Tambahkan tipe data pada parameter map */}
        {regions.slice(0, 5).map((region: Region, index: number) => (
          <li key={region.id || index} className="text-slate-600">
            {region.name}
          </li>
        ))}
      </ul>
    </div>
  );
}