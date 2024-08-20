<!-- Composition api Short -->

<script setup>
import { onMounted, ref } from "vue";

const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['Task 1', 'Task 2', 'Task 3']);  
const newTask = ref('');

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if(status.value === 'pending'){
    status.value = 'inactive';
  } else{
    status.value = 'active';
  }
};

const addTask = () => {
  if(newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
  newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};


onMounted(async() => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    // tasks.value = data.slice(0, 3);
/* Maps the titles of the tasks from the given data array and assigns them to the tasks.value property.*/
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log('Error Fetching tasks.', error)
  }
});
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <p v-if="status === 'active'">User is Active.</p>
    <p v-else-if="status === 'pending'">User is pending.</p>
    <p v-else>User is Inactive</p>

    <form @submit.prevent="addTask">
      <label for="newTask">Add task</label> <br>
      <input type="text" id="newTask" v-model="newTask">
      <button type="submit"> Submit</button>
    </form>

    <h3>Tasks:</h3>
    <ul>
      <!-- <li v-for="task in tasks" :key="task">{{ task }}</li> -->
      <li v-for="task in tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">x</button>
      </li>
    </ul>
   <br>
    <button @click="toggleStatus">Change Status</button>
  </div>
</template>

