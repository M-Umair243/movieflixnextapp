import { NextResponse } from "next/server";
// api/products
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699, category: "Electronics" },
  { id: 3, name: "Headphones", price: 199, category: "Accessories" },
  { id: 4, name: "Backpack", price: 49, category: "Fashion" },
  { id: 5, name: "Coffee Maker", price: 79, category: "Home Appliances" },
  { id: 6, name: "Gaming Mouse", price: 59, category: "Accessories" },
  { id: 7, name: "Smartwatch", price: 299, category: "Electronics" },
  { id: 8, name: "Desk Chair", price: 129, category: "Furniture" },
  { id: 9, name: "Bluetooth Speaker", price: 89, category: "Electronics" },
  { id: 10, name: "Running Shoes", price: 120, category: "Fashion" },
];

export async function GET(req) {
  return NextResponse.json({ message: "fetching all products", success: true,products });
}


export async function POST(req) {
    const data=await req.json();
    const newData=products.push(data)
    return NextResponse.json({message:"fetching data from body",newData})
}