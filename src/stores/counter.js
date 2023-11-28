import { defineStore } from 'pinia'

const defaultState = {
  count:0
}
export const useCounterStore = defineStore('counter', {
  state: () => defaultState,
  
  actions: {
    func() {
      const total = this.count + 1;
      this.count = total
      console.log(total,"hihi")
      return this.count
    },
  },
})