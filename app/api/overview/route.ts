import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    branches: 24,
    revenueToday: 84200,
    revenueMonthly: 2100000,
    profit: 412000,
    expenses: 184000,
    ordersToday: 183,
    employeesOnline: 184,
    employeesAbsent: 12,
    pendingApprovals: 7,
    inventoryAlerts: 5,
    aiAlerts: 3,
    reservationsToday: 31,
    customerSatisfaction: 94,
    googleReviews: 4.8,
    deliveryPerformance: 97,
    notifications: [
      'Inventory reorder approved',
      'New reservation backlog',
      'Staffing recommendation generated',
    ],
  })
}
