class SortArray {
    constructor(array) {
        this.originalArray = array;
    }

    //Private Method
    #sortArray(array) {
        return array.slice().sort((a, b) => a - b);
    }

    getSortedArray() {
        return this.#sortArray(this.originalArray);
    }
}



class SortObjectArray extends SortArray {
    constructor(arr, key) {
        super(arr);
        this.key = key;
    }

    getSortedArray() {
        return this.originalArray
            .slice()
            .sort((a, b) => a[this.key] - b[this.key]);
    }
}
