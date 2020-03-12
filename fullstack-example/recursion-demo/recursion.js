const muyRecursivoList = ['poop', 'butter', 'lime', 'jellybeans'] 

// Recursive function definition
function printArray(array) {
    // Base case:
    // If we have any elements in our array
    if (array.length >= 1) {
        // Perform the operation
        console.log(array)
        // Call yourself recursively with the new
        // state of the array as the input to that 
        // function
        return printArray(array.slice(1))
    } else {
        // We no longer have any more elements in our array
        // Bail out of the function
        return
    }
}

// invoke recursive function
printArray(muyRecursivoList)