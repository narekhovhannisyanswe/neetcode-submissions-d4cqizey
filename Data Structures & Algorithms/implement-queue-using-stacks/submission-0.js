class MyQueue {
    queue = []

    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.reverse()
        this.queue.push(x)
        this.queue.reverse()
    }

    /**
     * @return {number}
     */
    pop() {
        return this.queue.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        return this.queue.at(-1);
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
