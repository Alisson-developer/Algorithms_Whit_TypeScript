
class InsertionSort {

    insertionSort(list: Array<number>): void {
        for (let currentIndex = 0; currentIndex < list.length; currentIndex++) {
            let current = list[currentIndex]
            let previousIndex = currentIndex - 1

            while ( previousIndex >= 0 && list[previousIndex] > current ) {
                list[previousIndex + 1] = list[previousIndex]
                previousIndex -= 1
            }

            list[previousIndex + 1] = current
        }
    }
}

const list = [5,4,6,8,9,2]
const insertion = new InsertionSort()

console.log(`Origin: ${list}\n`)

insertion.insertionSort(list)

console.log(`Sort: ${list}`)


