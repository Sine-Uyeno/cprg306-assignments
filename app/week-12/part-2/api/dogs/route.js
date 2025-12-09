import z from 'zod';

export async function GET() {
    // fetch all dogs from the database
    // SELECT * FROM dogs
    const dogs = [
        {id: 1, name: "Luna", age:2},
        {id: 2, name: "Luna2", age:20},
        {id: 3, name: "Luna3", age:7},
    ]

    return new Response(JSON.stringify(dogs), {status:200});
}

export async function POST(request) {
    let newDog = request.json();

    const newDogSchema = z.object( {
        name: z.string(),
        age: z.number().min(1).max(30)
    } );
    try {
        newDog = newDogSchema.parse(newDog);
    } catch(error) {
        return new Response("Data does not match valid schema.", {status:406});
    } 
    // add the new dog to the databse
    // { name: "Luna5", age: 9238472938}
    newDog.id = 4
    // INSERT statement

    return new Response( JSON.stringify(newDog), {status:201});
}