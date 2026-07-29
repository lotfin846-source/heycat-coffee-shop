import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    { id: '1', name: 'Downtown', city: 'New York', status: 'Healthy', revenue: '$18.4K' },
    { id: '2', name: 'Midtown', city: 'Chicago', status: 'Watch', revenue: '$14.1K' },
    { id: '3', name: 'Harbor', city: 'Miami', status: 'Healthy', revenue: '$21.9K' },
  ])
}
