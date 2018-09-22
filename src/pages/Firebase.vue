<template>
  <div>
    <h3 class="title">Firebase</h3>
    <p>{{counter}}</p>
    <button @click="updateFoo()" class="button">Update Foo</button>
  </div>
</template>
<script>
import { firebaseApp } from "../firebase.js";
export default {
  created() {
    //ทำก่อนสร้าง dom
    this.counterRef = firebaseApp()
      .database()
      .ref("/foo");
  },
  mounted() {
    this.counterRef.on("value", ss => {
      // อ่านทุกครั้ง
      console.log(ss.val());
      this.counter = ss.val();
    });
  },

  beforeDestroy() {
    // ต้องทำลายเพื่อจัดการ resource
    this.counterRef.off();
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    // async updateFoo() {
    //   //await this.counterRef.set("bar");
    //   //console.log("done");
    // }

    updateFoo() {
      this.counterRef.once("value", async ss => {
        console.log(ss.val());
        const counter = ss.val();
        await this.counterRef.set(counter + 1);
      }); // อ่านครั้งเดียวและทำงานเสร็จคือจบทันที
    }
  }
};
</script>

