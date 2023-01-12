<template>
  <div class="">
    <button type="button" class="">{{ msg }}</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PingComponent',
  data() {
    return {
      msg: 'ffds',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://localhost:5000/ping';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>