function getRealFloor(n) {
    if (n < 1) {
        return n;
    } else if (n >= 1 && n <= 13) {
        return n - 1;
    } else if (n > 13) {
        return n - 2;
    }
}

console.log(getRealFloor(1)); // return 0
console.log(getRealFloor(5)); // return 4
console.log(getRealFloor(15)); // return 13
