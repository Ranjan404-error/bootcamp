'use client';

import { useState } from 'react';
import ProductTable from '@/components/admin/ProductTable';
import ProductFormModal from '@/components/admin/ProductFormModal';
import EditProductModal from '@/components/admin/EditProductModal';

const initialProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 120,
    category: 'Headphones',
    stock: 12,
  },
  {
    id: '2',
    name: 'Bluetooth Speaker',
    price: 85,
    category: 'Speakers',
    stock: 8,
  },
];

export default function ProductManagerPage() {
  const [products, setProducts] = useState(initialProducts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const addProduct = (newProduct: any) => {
    setProducts([...products, { ...newProduct, id: Date.now().toString() }]);
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateProduct = (updated: any) => {
    setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Add Product
        </button>
      </div>

      <ProductTable
        products={products}
        onDelete={deleteProduct}
        onEdit={(product) => {
          setEditProduct(product);
          setIsEditOpen(true);
        }}
      />

      <ProductFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAdd={addProduct}
      />

      <EditProductModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onUpdate={updateProduct}
        product={editProduct}
      />
    </div>
  );
}
