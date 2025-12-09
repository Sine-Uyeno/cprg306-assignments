import { neon } from '@neondatabase/serverless';
import z from 'zod';

export async function GET() {
    // fetch all dogs from the database
    // SELECT * FROM dogs
    try {
        const dbUrl = process.env.DATABASE_URL ?? "";
        const sql = neon(dbUrl);

        const response = await sql`SELECT * FROM dogs`;

        return new Response(JSON.stringify(response), {status:200});
    } catch (error) {
        return new Response("Database Issue", {status: 500});
    }
    
}

export async function POST(request) {
    let newDog = await request.json();

    const newDogSchema = z.object( {
        name: z.string(),
        age: z.number().min(1).max(30)
    } );
    try {
        newDog = newDogSchema.parse(newDog);
    } catch(error) {
        return new Response("Data does not match valid schema.", {status:406});
    } 
    
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    const response = await sql`
        INSERT INTO dogs (name, age) 
        VALUES ( ${newDog.name}, ${newDog.age} )
        RETURNING * `;

    return new Response( JSON.stringify(response), {status:201});
}