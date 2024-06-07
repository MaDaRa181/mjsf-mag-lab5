<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card text-dark" style="border-radius: 1rem; background-color: #eff1f2;">
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-primary">Login</h2>
              <p class="text-dark-50 mb-5">Please enter your login and password!</p>
              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" v-model="email" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>
              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>
              <button class="btn btn-primary btn-lg px-5" @click="login">Login</button>
              <div v-if="verificationNeeded" class="mt-4">
                <p class="text-warning">Email not verified. Please verify your email or click the button below to resend the verification email.</p>
                <button class="btn btn-secondary btn-lg px-5" @click="resendVerificationEmail">Resend Verification Email</button>
              </div>
            </div>
            <div>
              <p class="mb-0">Don't have an account? <router-link to="/register">Sign Up</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: '',
      password: '',
      verificationNeeded: false
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        if (userCredential.user.emailVerified) {
          this.router.push('/todo');
        } else {
          this.verificationNeeded = true;
        }
      } catch (error) {
        alert(error.message);
      }
    },
    async resendVerificationEmail() {
      try {
        const user = auth.currentUser;
        if (user) {
          await sendEmailVerification(user);
          alert('Verification email sent. Please check your inbox.');
        }
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>
