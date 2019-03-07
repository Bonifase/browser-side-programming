
function iterate(){
    let fruits = ['mango', 'apple', 'orange', 'peas']
    fruits.forEach((fruit, index, fruits) => {
      console.log(fruit)
})

    let inventory = [
        "computers",
        "monitor",
        "HDD",
        "CPU"
    ]

    inventory.forEach((item, index, inventory) => {
        console.log('You are funny', item)
    })

}
