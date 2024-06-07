<template>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card text-dark" style="border-radius: 1rem; background-color: #eff1f2;">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-primary">Register</h2>
                <p class="text-dark-50 mb-5">Please enter your email and password!</p>
                <div class="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" class="form-control form-control-lg" v-model="email" />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password" />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>
                <button class="btn btn-primary btn-lg px-5" @click="register">Register</button>
              </div>
              <div>
                <p class="mb-0">Already have an account? <router-link to="/login">Login</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      async register() {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          await sendEmailVerification(userCredential.user);
          alert('Verification email sent. Please check your inbox.');
          this.router.push('/login');
        } catch (error) {
          alert(error.message);
        }
      }
    }
  };
  </script>
