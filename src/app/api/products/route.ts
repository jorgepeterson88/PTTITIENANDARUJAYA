import { NextResponse } from "next/server";

// Mock product data - in real app, this would come from database
const products = [
  {
    id: 1,
    name: "Tepung Terigu Premium",
    category: "Bahan Baku Kering",
    description: "Tepung terigu berkualitas tinggi untuk kebutuhan industri makanan",
    price: 12000,
    unit: "kg",
    stock: 1000,
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "Gula Pasir Premium",
    category: "Bahan Baku Kering",
    description: "Gula pasir dengan kualitas terbaik untuk industri makanan dan minuman",
    price: 15000,
    unit: "kg",
    stock: 800,
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "Rempah Pilihan",
    category: "Bahan Baku Kering",
    description: "Berbagai macam rempah berkualitas untuk masakan Indonesia",
    price: 25000,
    unit: "kg",
    stock: 500,
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    name: "Sayuran Segar",
    category: "Bahan Baku Basah",
    description: "Sayuran segar pilihan langsung dari petani terpercaya",
    price: 8000,
    unit: "kg",
    stock: 200,
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    name: "Buah-Buahan Segar",
    category: "Bahan Baku Basah",
    description: "Buah-buahan segar dan berkualitas untuk kebutuhan industri",
    price: 12000,
    unit: "kg",
    stock: 150,
    image: "/api/placeholder/300/200"
  },
  {
    id: 6,
    name: "Daging Ayam Segar",
    category: "Bahan Baku Basah",
    description: "Daging ayam segar dengan sertifikat halal dan kualitas terjamin",
    price: 35000,
    unit: "kg",
    stock: 100,
    image: "/api/placeholder/300/200"
  },
  {
    id: 7,
    name: "Bumbu Instan Premium",
    category: "Produk Olahan",
    description: "Bumbu instan praktis dengan rasa autentik untuk kebutuhan industri",
    price: 5000,
    unit: "pack",
    stock: 1000,
    image: "/api/placeholder/300/200"
  },
  {
    id: 8,
    name: "Saus Premium",
    category: "Produk Olahan",
    description: "Berbagai macam saus berkualitas untuk pelengkap makanan",
    price: 8000,
    unit: "bottle",
    stock: 500,
    image: "/api/placeholder/300/200"
  },
  {
    id: 9,
    name: "Produk Beku",
    category: "Produk Olahan",
    description: "Makanan beku dengan kualitas terjamin dan masa simpan panjang",
    price: 18000,
    unit: "pack",
    stock: 300,
    image: "/api/placeholder/300/200"
  }
];

// GET all products or filter by category
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filteredProducts = products;

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Filter by search term
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length
    });

  } catch (error) {
    console.error("Products API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST new product (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, category, description, price, unit, stock } = body;

    // Validate required fields
    if (!name || !category || !description || !price || !unit || stock === undefined) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Validate admin authentication
    // 2. Save to database
    // 3. Return the created product

    const newProduct = {
      id: products.length + 1,
      name,
      category,
      description,
      price: parseFloat(price),
      unit,
      stock: parseInt(stock),
      image: "/api/placeholder/300/200"
    };

    products.push(newProduct);

    return NextResponse.json({
      success: true,
      message: "Product created successfully",
      data: newProduct
    });

  } catch (error) {
    console.error("Product creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}