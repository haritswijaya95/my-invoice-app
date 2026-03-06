// app/region/[id]/page.tsx

// 1. Tambahkan 'async' pada fungsi komponen
export default async function RegionDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> // 2. Definisikan params sebagai Promise
}) {
  // 3. Tunggu (await) hingga params tersedia
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 4. Lakukan pengecekan safety dan gunakan replace
  const regionName = id ? id.replace(/-/g, ' ').toUpperCase() : "Unknown";

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Detail Wilayah: {regionName}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-600 font-medium">Total Invoice</p>
          <p className="text-2xl font-bold">128</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600 font-medium">Status Pembayaran</p>
          <p className="text-2xl font-bold text-green-700">92% Lancar</p>
        </div>
      </div>

      <div className="mt-8 text-gray-500">
        Menampilkan data invoice khusus untuk wilayah {regionName}.
      </div>
    </div>
  );
}