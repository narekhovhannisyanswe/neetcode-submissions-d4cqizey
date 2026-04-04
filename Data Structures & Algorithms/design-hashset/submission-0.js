class MyHashSet {
    constructor() {
        this.values = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.contains(key)) {
            this.values.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.values = this.values.filter(val => val !== key);
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.values.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
