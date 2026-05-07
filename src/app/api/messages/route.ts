import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json([{id:'t1',status:'request_pending'}]);}
export async function POST(){return NextResponse.json({ok:true,status:'request_pending'});}
