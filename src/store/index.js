import { reactive } from 'vue'

const cart = reactive({
    items: [],
    total: 0,
    add(item) {
        this.items.push(item);
        this.total += item.price;
    },
    remove(item) {
        debugger
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            this.total -= item.price;
        }
    }
});
export default { cart };