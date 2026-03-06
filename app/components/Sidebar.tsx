import Link from "next/link";

interface SidebarProps {
  // Buat menjadi opsional dengan tanda "?" agar layout.tsx tidak error
  onSelectRegionAction?: (name: string) => void;
}

// Contoh data region (sesuaikan dengan data kamu)
const regions = [
  { id: "jakarta", name: "Jakarta" },
  { id: "jawa-barat", name: "Jawa Barat" },
  { id: "jawa-tengah", name: "Jawa Tengah" },
];

export default function Sidebar({ onSelectRegionAction }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Regions</h2>
      <nav className="space-y-2">
        {regions.map((region) => (
          <Link
            key={region.id}
            href={`/region/${region.id}`} // Path tujuan navigasi
            onClick={() => onSelectRegionAction?.(region.name)} // Jalankan jika ada fungsinya
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors border"
          >
            {region.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}