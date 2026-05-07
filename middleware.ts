import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(_req: NextRequest) {return NextResponse.next();}
// TODO: protect /app and /admin once auth is connected.
