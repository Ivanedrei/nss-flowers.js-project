const flowers = [{
    id: 1,
    color: "white",
    species: "Rose",
    price: 0.90
},
{
    id: 2,
    color: "red",
    species: "Tulip",
    price: 1.10
}
]

const sunflower = {
    color: "yellow",
    species: "sunflower",
    price: 1.25
}

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const lastFlower = flowers[lastIndex]
    const maxId = lastFlower.id
    const NewId = maxId + 1

    flowerObject.id = NewId
    flowers.push(flowerObject)
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.
 
        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */

}
addFlower(sunflower)
console.log(flowers)



const findExpensiveFlowers = (expensiveFlowerObject) => {
    const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    }
    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

    return expensiveFlowers  // Do not change this code
}
const flowerThing = findExpensiveFlowers()
console.log(flowerThing)


// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

