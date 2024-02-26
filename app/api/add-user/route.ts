import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');
 
    try {
        if (!email || !password) throw new Error('User email and password required');
        await sql`INSERT INTO Users (Email, Password) VALUES (${email}, ${password});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
 
    const users = await sql`SELECT * FROM Users;`;
    return NextResponse.json({ users }, { status: 200 });
}
