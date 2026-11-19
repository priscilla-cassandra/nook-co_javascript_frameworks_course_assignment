'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import type { Product } from '@/types/product';

interface SearchBarProps {
  products: Product[];
}

export default function SearchBar({ products }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const productSearch = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];
    return products.filter((p) => p.title.toLowerCase().includes(term));
  }, [products, searchTerm]);

  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded border px-4 py-2"
      />
      {searchTerm.trim() && (
        <div className="absolute top-full right-0 left-0 z-10 mt-1 max-h-64 overflow-y-auto rounded border bg-white shadow-lg">
          {productSearch.length > 0 ? (
            <ul>
              {productSearch.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/product/${p.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {p.title}{' '}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-2 text-gray-500">
              No results match your search
            </p>
          )}
        </div>
      )}
    </div>
  );
}
