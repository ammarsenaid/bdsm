import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json([{id:'p1',title:'منشور تجريبي'}]);}
export async function POST(){return NextResponse.json({ok:true,id:'new-post'});}
