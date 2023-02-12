<script lang='ts'>
	import { signInWithPopup, type UserCredential } from 'firebase/auth';
	import { Wallet } from 'svelte-heros-v2';
  import {googleProvider, auth} from '../../../firebase'
	import type { User } from '../../../types/User';

  let normalGoogleSignInBtnImg = '/images/btn_google_signin_light_normal_web.png'
  let focusGoogleSignInBtnImg = '/images/btn_google_signin_light_pressed_web.png'
  let googleSignInBtnImg = normalGoogleSignInBtnImg;

  const onGoogleSignInBtnHover = () => {
    if (googleSignInBtnImg !== focusGoogleSignInBtnImg) {
      googleSignInBtnImg = focusGoogleSignInBtnImg
    }
  }

  const onGoogleSignInBtnLeave = () => {
    if (googleSignInBtnImg !== normalGoogleSignInBtnImg) {
      googleSignInBtnImg = normalGoogleSignInBtnImg
    }
  }

  const signInWithGoogle = async () => {
    const result: UserCredential = await signInWithPopup(auth, googleProvider)
    const user: User = {
      displayName: result.user.displayName,
      email: result.user.email,
      phoneNumber: result.user.phoneNumber,
      photoUrl: result.user.photoURL
    }
    console.log({user});
  }
</script>

<section class="flex justify-center items-center min-h-screen">
  <div class="flex shadow w-3/5 rounded-md">
    <div class="p-6 w-1/2 bg-white border-left bg-blue-500 flex items-center justify-center">
      <div class="font-semibold mr-8 flex text-white"> <Wallet class="mr-2" /> Money Manager</div>
    </div>
    <div class=" w-1/2 p-6 border rounded bg-white">
      <p>Welcome,</p>
      <p class='text-sm text-gray-400'>Please sign in first.</p>
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <button 
        class="mt-4"
        on:click={signInWithGoogle} 
        on:mouseover={onGoogleSignInBtnHover} 
        on:mouseleave={onGoogleSignInBtnLeave}
      >
        <img src={googleSignInBtnImg} alt="Google Sign In Button" />
      </button>
    </div>
  </div>
</section>