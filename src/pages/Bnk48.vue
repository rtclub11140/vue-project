<template>
  <div>
    <p>bnk48</p>
    <p>{{totalPrice}}</p>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" :key="each.id" v-for="each in bnk48">
          <img @click="toggle(each.id)" :src="`/images/${each.name}.png`" :alt="each.name" :style="style(each.id)" />
      </div>
    </div>      
  </div>
</template>

<script>
import { bnk48 } from "../db.json";
// const bnk48 = db.bnk48;
// console.log(bnk48);

// map, filter, reduce
const prices = bnk48.reduce((x, each) => {
  return each.price + x;
}, 0);

export default {
  data() {
    return {
      bnk48,
      selected: [],
      baseStyle: {
        cursor: "pointer"
      }
    };
  },
  computed: {
    totalPrice() {
      // const filter = this.bnk48.filter(each => {
      //   return this.selected.includes(each.id);
      // });

      // console.log(filter);

      // const map = filter.map(each => {
      //   return each.price;
      // });

      // const reduce = map.reduce((x, each) => {
      //   return each + x;
      // }, 0);

      // console.log(reduce);

      // return this.bnk48
      //   .filter(each => {
      //     return this.selected.includes(each.id);
      //   })
      //   .map(each => {
      //     return each.price;
      //   })
      //   .reduce((x, each) => {
      //     return each + x;
      //   }, 0);

      return this.bnk48
        .filter(each => {
          return this.selected.includes(each.id);
        })
        .map(each => {
          return each.price;
        })
        .reduce(
          (x, each) => {
            const count = x.count + 1;
            const total = x.total + each;
            return { count, total };
          },
          { count: 0, total: 0 }
        );
    }
  },
  methods: {
    toggle(id) {
      const idx = this.selected.indexOf(id);
      if (idx == -1) {
        this.selected.push(id);
      } else {
        this.selected.splice(idx, 1);
      }
      console.log(this.selected);
    },
    style(id) {
      //console.log(this.selected.includes(id));
      return {
        ...this.baseStyle,
        border: this.selected.includes(id) ? "solid 2px red" : ""
      };
    }
  }
};
</script>

