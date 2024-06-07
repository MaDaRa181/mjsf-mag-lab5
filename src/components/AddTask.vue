<template>
  <div class="pb-2">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row align-items-center">
          <input 
            type="text" 
            class="form-control form-control-lg" 
            v-model="newTask" 
            placeholder="Add new..." 
            @keyup.enter="addTask"
          />
          <a href="#!" data-mdb-toggle="tooltip" title="Set due date" @click="toggleDueDate">
            <i class="fas fa-calendar-alt fa-lg me-3"></i>
          </a>
          <div v-if="showDueDate">
            <input 
              type="date" 
              class="form-control" 
              v-model="dueDate" 
              @change="setDueDate"
            />
          </div>
          <div>
            <button type="button" class="btn btn-primary" @click="addTask">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(_, { emit }) {
    const newTask = ref('');
    const showDueDate = ref(false);
    const dueDate = ref('');

    const addTask = () => {
      if (newTask.value.trim()) {
        const task = {
          id: 0,
          text: newTask.value,
          dueDate: dueDate.value,
          createdAt: new Date().toISOString(),
          completed: false
        };
        emit('add-task', task);
        newTask.value = '';
        dueDate.value = '';
        showDueDate.value = false;
      }
    };

    const toggleDueDate = () => {
      showDueDate.value = !showDueDate.value;
    };

    const setDueDate = (event: Event) => {
      dueDate.value = (event.target as HTMLInputElement).value;
    };

    return {
      newTask,
      showDueDate,
      dueDate,
      addTask,
      toggleDueDate,
      setDueDate
    };
  }
});
</script>
