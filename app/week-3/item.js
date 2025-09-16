const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1, 
    category: "dairy",
};

export default function Item({item}) {



    let name = item.name;
    let quantity = item.quantity;
    let category = item.category;

    return (
        <div>
            <li class="p-2 m-10 bg-amber-700 max-w-sm">
                <h2 class="text-2xl font-bold">{name}</h2>
                <p>Buy {quantity} of them from the {category} isle</p>
            </li>
        </div>
    );   
}