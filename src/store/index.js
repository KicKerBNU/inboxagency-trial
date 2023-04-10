import { reactive } from 'vue'

const cart = reactive({
    items: [],
    total: 0,
    add(item) {
        const foundItem = this.items.find(i => i.id === item.id);
        if (foundItem) {
            foundItem.quantity++;
            this.total += item.price;
            return;
        }
        this.items.push(item);
        this.total += item.price;
    },
    remove(item) {
        const index = this.items.indexOf(item);
        if(item.quantity > 1) {
            item.quantity--;
            this.total -= item.price;
            return;
        }
        if (index > -1) {
            this.items.splice(index, 1);
            this.total -= item.price;
        }
    },
    removeAll(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            this.total -= item.price * item.quantity;
        }
    }
});
export default { cart };