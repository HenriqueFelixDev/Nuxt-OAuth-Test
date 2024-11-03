<script setup>
definePageMeta({
  auth: {
	unauthenticatedOnly: true, navigateAuthenticatedTo: '/'
  }
})

const { signIn } = useAuth()
</script>

<template>
	<button @click="signIn('google')">Login</button>
</template>