import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({ok:true,app:'Majlis Noir',environment:process.env.NODE_ENV ?? 'development'});}
