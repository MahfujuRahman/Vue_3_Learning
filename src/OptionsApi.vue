<!-- Options api -->

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
      status: "active",
      tasks:['Task 1', 'Task 2', 'Task 3'],
      link:'https://google.com'
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if(this.status === 'pending'){
        this.status = 'inactive';
      } else{
        this.status = 'active';
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <p v-if="status === 'active'">User is Active.</p>
    <p v-else-if="status === 'pending'">User is pending.</p>
    <p v-else>User is Inactive</p>

    <h3>Tasks:</h3>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <a :href="link">Click for google</a>

    <br>

    <button v-on:click="toggleStatus">Change Status</button>
    <button @click="toggleStatus">Change Status</button>
  </div>
</template>

