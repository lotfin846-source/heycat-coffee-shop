import { NextResponse } from 'next/server'
import { signToken } from '@/lib/auth'

export async function POST(request: Request) {
  const body = await request.json()
  const role = body?.role || 'Owner'
  const token = signToken({ sub: 'demo-user', role })

  return NextResponse.json({
    token,
    user: {
      id: 'demo-user',
      name: 'Demo Owner',
      role,
    },
  })
}
