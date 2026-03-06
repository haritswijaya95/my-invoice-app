import { expect, test, describe } from 'vitest';

// 1. Perbaikan Interface (Error 1005 & 2304)
// Hapus kata 'result' setelah nama Interface
interface Transaction {
  id: number;
  code: string;
  transaction_date?: string;
  customer_id?: number;
}

interface Product {
  id: number;
  code: string;
  name?: string;
  price?: number;
}

// Interface ini harus bersih: interface [Nama] { ... }
interface Invoice {
  id: number;
  number: string;
}

// 2. Gunakan interface Invoice sebagai Return Type
function generateInvoice(
  tId: number, 
  transactions: Transaction[], 
  products: Product[]
): Invoice | null {
  
  const txn = transactions.find((t: Transaction) => t.id === tId);
  
  if (!txn) return null;

  return { 
    id: txn.id, 
    number: txn.code 
  };
}

describe('Logika Invoice', () => {
  test('Harus menghasilkan data invoice yang benar jika ID ditemukan', () => {
    const mockTxn: Transaction[] = [{ id: 1, code: "INV-001" }];
    const result = generateInvoice(1, mockTxn, []);
    
    expect(result).not.toBeNull();
    
    // Pengecekan 'if (result)' memastikan properti 'id' dan 'number' bisa diakses (Error 2339)
    if (result) {
      expect(result.number).toBe("INV-001");
      expect(result.id).toBe(1);
    }
  });

  test('Harus mengembalikan null jika ID transaksi tidak ada', () => {
    const result = generateInvoice(99, [], []);
    expect(result).toBeNull();
  });
});