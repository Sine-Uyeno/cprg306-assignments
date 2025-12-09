import { neon } from "@neondatabase/serverless";

export async function GET(request, {params}) {
    const { dogid } = await params;
    const idNum = Number(dogid);

    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    const response = await sql`SELECT * FROM dogs WHERE id = ${idNum}`;

    //const thisDog = dogs.find( (dog) => dog.id === idNum);
    if(!response) {
        return new Response("This dog does not exist", {status: 404});
    }
    return new Response( JSON.stringify(response), {status:200});    
}

export async function PUT(request, {params}) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    const updatedDog = await request.json();

    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    await sql`
    UPDATE dogs 
    SET name = ${updatedDog.name}, age = ${updatedDog.age} 
    WHERE id = ${idNum}`;

    return new Response(null, {status:204});
}

export async function PATCH(request, {params}) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    const updatedDog = await request.json();
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    try {
        if (updatedDog.name) {
            // Validation
            await sql`UPDATE dogs SET name = ${updatedDog.name} WHERE id = ${idNum}`;
        }
        if (updatedDog.age) {
            // Validation
            await sql`UPDATE dogs age = ${updatedDog.age} WHERE id = ${idNum}`;
        }
    } catch (error) {

    }
    return new Response(null, { status:204 });
}

export async function DELETE(request, { params }) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    const response = await sql`DELETE FROM dogs WHERE id = ${idNum}`;
    return new Response(response, {status:200});
}