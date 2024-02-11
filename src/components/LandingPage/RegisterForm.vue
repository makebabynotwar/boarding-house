<template>
	<div class="register_form">
		<form @submit.prevent="submitCredentials">
			<div class="title">
				<span>Have an account?</span>
				Login
			</div>
			<input 
				class="username" 
				type="text" 
				placeholder="Email"
				required 
			>
			<input 
				class="password" 
				type="password" 
				placeholder="Password"
				required
			>
			
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data(){
		
	},
	methods: {
	
	}

}
</script>

<style lang="scss" scoped>

</style>