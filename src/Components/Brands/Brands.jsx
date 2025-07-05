import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  function getBrands() {
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
      .then(({ data }) => {
        const products = data.data;

        const uniqueBrands = products.reduce((acc, product) => {
          const brand = product.brand;
          if (brand && !acc.seen.has(brand._id)) {
            acc.seen.add(brand._id);
            acc.brands.push(brand);
          }
          return acc;
        }, { seen: new Set(), brands: [] }).brands;

        setBrands(uniqueBrands);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      });
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {brands.map((brand) => (
        <div key={brand._id} className="border p-4 rounded shadow text-center">
          <img
            src={brand.image}
            alt={brand.name}
            className="w-full h-24 object-contain mb-2"
          />
          <h3 className="font-semibold">{brand.name}</h3>
        </div>
      ))}
    </div>
  );
}
