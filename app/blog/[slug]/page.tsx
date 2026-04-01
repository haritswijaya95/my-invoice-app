// app/blog/[slug]/page.tsx

// 1. Definisikan tipe params sebagai Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 2. Tambahkan 'async' pada fungsi komponen
export default async function PostPage({ params }: PageProps) {
  // 3. Await params sebelum digunakan
  const { slug } = await params;

  return (
    <div className="p-8">
      <h1>Blog Post: {slug}</h1>
      {/* Isi konten blog kamu */}
    </div>
  );
}