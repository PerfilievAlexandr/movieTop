export const utils = function(arr) {
    return arr.reduce((acc , current) => (
         {...acc, [current.id]: current} 
    ), {})
}