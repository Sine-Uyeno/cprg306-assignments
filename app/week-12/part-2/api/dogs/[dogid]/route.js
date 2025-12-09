export async function GET(request, {params}) {
    const { dogid } = await params;
    const idNum = Number(dogid);

    const dogs = [
        {id: 1, name: "Luna", age:2},
        {id: 2, name: "Luna2", age:20},
        {id: 3, name: "Luna3", age:7},
    ];

    const thisDog = dogs.find( (dog) => dog.id === idNum);
    if(!thisDog) {
        return new Response("This dog does not exist", {status: 404});
        
    }
    return new Response( JSON.stringify(thisDog), {status:200});    
}

export async function PUT(request, {params}) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    const updatedDog = await request.json();
    return new Response(null, {status:204});
}

export async function PATCH(request, {params}) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    const updatedDog = await request.json();
    try {
        if (updatedDog.name) {

        }
        if (updatedDog.age) {

        }
    } catch (error) {

    }
    return new Response(null, { status:204 });
}

export async function DELETE(request, { params }) {
    const { dogid } = await params;
    const idNum = Number(dogid);
    let responseText = `Dog number ${idNum} was deleted.`;
    return new Response(responseText, {status:200});
}