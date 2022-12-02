function getTotalX(a, b) {
    // Write your code here
    let int = 0
    const min = Math.min(...a, ...b)
    const max = Math.max(...a, ...b)

    for (let i = min; i <= max; i++) {
        let is_valid = true
        for (let j = 0; j < a.length; j++)
            if (i % a[j]) {
                is_valid = false
                break
            }
        for (let j = 0; j < b.length; j++)
            if (b[j] % i) {
                is_valid = false
                break
            }

        if (is_valid) int++

    }
    return int

}