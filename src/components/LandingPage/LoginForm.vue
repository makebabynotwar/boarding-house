<template>
	<div class="login-form">
		<form @submit.prevent="submitCredentials">
			<div class="title">
				<span>Have an account?</span>
				Login
			</div>
			<input 
				class="username" 
				v-model.trim="form.email" 
				type="text" 
				placeholder="Email"
				required 
			>
			<input 
				class="password" 
				v-model.trim="form.password" 
				type="password" 
				placeholder="Password"
				required
			>
			<button :class="['login', { load: loading }]" :disabled="loading" type="submit">Login</button>
			<div class="error" v-if="error.mode">
				<small>Incorrect email or password.</small>
			</div>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data(){
		return {
			form: {
				email: '',
				password: ''
			},
			error: {
				mode: false,
				message: ''
			},
			loading: false
		}
	},
	methods: {
		...mapActions({
			login: 'auth/login'
		}),
		submitCredentials(){
			this.loading = true;
			this.login(this.form)
			.then(()=>{
				this.error.mode = false;
				this.loading = false;
				this.$router.push('/room-list')
			})
			.catch(()=>{
				this.error.mode = true;
				this.loading = false;
			})
		}
	}

}
</script>

<style lang="scss" scoped>
.login-form {
	.error {
	    text-align: center;
	    color: red;
	}
}
</style>