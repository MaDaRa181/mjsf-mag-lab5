<template>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Verify Email</h2>
                <p class="text-white-50 mb-5">Please check your email for a verification link.</p>
                <button class="btn btn-primary btn-lg px-5" @click="resendVerificationEmail">Resend Email</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  import { sendEmailVerification } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      async resendVerificationEmail() {
        try {
          await sendEmailVerification(auth.currentUser);
          alert('Verification email sent. Please check your inbox.');
        } catch (error) {
          alert(error.message);
        }
      }
    }
  };
  </script>
