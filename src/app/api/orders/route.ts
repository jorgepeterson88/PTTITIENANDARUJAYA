import { NextRequest, NextResponse } from "next/server";

// Mock order data - in real app, this would come from database
let orders = [];

// GET all orders (admin only) or specific order by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('id');
    const email = searchParams.get('email');

    if (orderId) {
      // Get specific order by ID
      const order = orders.find(o => o.id === parseInt(orderId));
      if (!order) {
        return NextResponse.json(
          { error: "Order not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: order
      });
    }

    if (email) {
      // Get orders by customer email
      const customerOrders = orders.filter(o => o.customerEmail === email);
      return NextResponse.json({
        success: true,
        data: customerOrders,
        total: customerOrders.length
      });
    }

    // Get all orders (admin only in real app)
    return NextResponse.json({
      success: true,
      data: orders,
      total: orders.length
    });

  } catch (error) {
    console.error("Orders API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      customerName, 
      customerEmail, 
      customerPhone, 
      customerAddress,
      items,
      totalAmount,
      paymentMethod,
      notes
    } = body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !customerAddress || !items || !totalAmount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "At least one item is required" },
        { status: 400 }
      );
    }

    // Generate order ID
    const orderId = orders.length + 1;
    const orderNumber = `ORD-${Date.now()}-${orderId}`;

    // Create new order
    const newOrder = {
      id: orderId,
      orderNumber,
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      items,
      totalAmount: parseFloat(totalAmount),
      paymentMethod: paymentMethod || 'transfer',
      notes: notes || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    orders.push(newOrder);

    // In a real app, you would:
    // 1. Save to database
    // 2. Send order confirmation email
    // 3. Send notification to admin
    // 4. Process payment

    console.log("New order created:", newOrder);

    return NextResponse.json({
      success: true,
      message: "Order created successfully",
      data: newOrder
    });

  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT update order status (admin only)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, status, notes } = body;

    if (!orderId || !status) {
      return NextResponse.json(
        { error: "Order ID and status are required" },
        { status: 400 }
      );
    }

    const validStatuses = ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    const orderIndex = orders.findIndex(o => o.id === parseInt(orderId));
    if (orderIndex === -1) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    // Update order
    orders[orderIndex].status = status;
    orders[orderIndex].updatedAt = new Date().toISOString();
    if (notes) {
      orders[orderIndex].notes = notes;
    }

    return NextResponse.json({
      success: true,
      message: "Order updated successfully",
      data: orders[orderIndex]
    });

  } catch (error) {
    console.error("Order update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}