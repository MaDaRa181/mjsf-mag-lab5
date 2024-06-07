<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
          <div class="card-body py-4 px-4 px-md-5">
            <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <u>My Todo-s</u>
            </p>
            <div class="d-flex justify-content-end mb-4">
              <span class="me-3">{{ currentUser?.email }}</span>
              <button class="btn btn-danger" @click="logout">Logout</button>
            </div>
            <TaskList />
            <hr class="my-4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  components: {
    TaskList
  },
  data() {
    return {
      currentUser: auth.currentUser
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.router.push('/login');
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>
