<template>
	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-4 my-5 p-2">
			<h1 class="text-center ml-1 mb-2">Create Account</h1>
			<form @submit.prevent="onSubmit">
				<label for="">Account Name</label>
				<input
					type="text"
					placeholder="Card, MPESA"
					class="form focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-gray-900 mb-2" />

					<div class="flex flex-row-reverse">
						<Btn text="create" />
					</div>
			</form>
		</div>
		<div class="col-sm-4"></div>
	</div>
</template>

<script>
import Btn from '~/components/Core/Btn';
import Axios from 'axios'

	export default {
		components: { Btn },
		data() {
			return {
				loading: false,
				name:"",
				formData: {},
			}
		},
		methods: {
			// Handle form submit for Social Input
			onSubmit(e) {
				this.formData = {
					name: this.name,
				}

				return Axios.get('/api/accounts')
					.then((res) => console.log(res.data))
					.catch((err) => console.log(err))

				Axios
					.post(`/api/posts`, {
						post: this.formData,
					})
					.then((res) => {
						console.log(res.data)
						//   Update posts
						axios.get("/api/posts").then((res) => {
							this.$emit("setState", "posts", res.data.data)
							// Clear text field
							this.text = ""
							// Redirect to home
							this.$router.push("/")
						})
					})
					.catch((err) => {
						const resErrors = err.response.data.errors
						console.log(err.response)

						var resError
						var newError = []
						for (resError in resErrors) {
							newError.push(resErrors[resError])
						}
						// Show error message
						// newError.push(err.response.data.message)
						// setErrors(newError)
					})
			},
		},
	}
</script>
