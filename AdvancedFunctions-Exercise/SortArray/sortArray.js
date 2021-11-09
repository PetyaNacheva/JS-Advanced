function sortArr(arr, str) {
    if (str === "desc") {
        return arr.sort((a, b) => b - a);
    } else if (str === "asc") {
        return arr.sort((a, b) => a - b);
    }

}


sortArr([14, 7, 17, 6, 8], 'desc')


//Another solution
function sortArrWithObj(arr, str) {
    let map = {
        'desc': (a, b) => b - a,
        'asc': (a, b) => a - b
    }

    return arr.sort(map[str]);
}
