<script>
	import { ref, computed } from "@nuxtjs/composition-api"
	import CryptoJS from "crypto-js"
	import Axios from "axios"
	
	import Btn from "@/components/Core/Btn"
	// import { GoogleLoginButton } from "react-social-login-buttons"
	
	import CloseSVG from "@/assets/svgs/CloseSVG"

	export default {
		components: {
			Btn,
			CloseSVG,
		},
		setup(props, { root }) {
			const email = ref("alphaxardgacuuru47@gmail.com")
			const phoneLogin = ref(false)
			const password = ref("alphaxardgacuuru47@gmail.com")
			const loading = ref(false)

			const isSecure = computed(() => window.location.href.match(/https/))

			const onSocial = (website) => {
				window.location.href = `/login/${website}`
			}

			const encryptedToken = (token) => {
				const secretKey = "BlackPropertyAuthorizationToken"
				return CryptoJS.AES.encrypt(token, secretKey).toString()
			}

			const fetchAuth = (token) => {
				Axios.get("api/auth", { headers: { Authorization: `Bearer ${token}` } })
					.then((res) => props.setAuth(res.data.data))
					.catch((err) => props.getErrors(err))
			}

			const onSubmit = () => {
				loading.value = true

				Axios.get("/sanctum/csrf-cookie").then(() => {
					Axios.post("/login", {
						email: email.value,
						password: password.value,
						device_name: "deviceName",
						remember: "checked",
					})
						.then((res) => {
							props.setMessages([res.data.message])
							fetchAuth(res.data.data)
							loading.value = false
							props.setLocalStorage(
								"sanctumToken",
								encryptedToken(res.data.data)
							)
							props.get("auth", props.setAuth, "auth", false)
							setTimeout(() => window.location.reload(), 1000)
						})
						.catch((err) => {
							loading.value = false
							props.getErrors(err)
						})
				})
			}

			const blur = computed(
				() => props.auth.name === "Guest" && root.$route.path.match("/admin")
			)

			const handleClose = () => {
				props.setLogin(false)
				root.$router.push("/admin/dashboard")
			}

			const togglePhoneLogin = () => {
				phoneLogin.value = !phoneLogin.value
			}

			return {
				email,
				phoneLogin,
				password,
				loading,
				blur,
				isSecure,
				onSocial,
				onSubmit,
				handleClose,
				togglePhoneLogin,
			}
		},
	}
</script>

<template>
	<div :class="blur ? 'menu-open' : ''">
		<div
			class="background-blur"
			:style="{ visibility: blur ? 'visible' : 'hidden' }"></div>
		<div class="bottomMenu">
			<div class="d-flex align-items-center justify-content-between">
				<!-- Logo Area -->
				<div class="logo-area p-2">
					<a href="#">Login</a>
				</div>
				<!-- Close Icon -->
				<div
					class="closeIcon float-end"
					style="font-size: 1em"
					@click="handleClose">
					<CloseSVG />
				</div>
			</div>
			<div class="p-2">
				<div
					v-if="phoneLogin"
					class="mycontact-form">
					<center>
						<form @submit.prevent="onSubmit">
							<input
								id="email"
								type="text"
								class="form-control"
								v-model="email"
								required
								autofocus />
							<Btn
								type="submit"
								class="border-light mt-2 w-75"
								text="Login"
								:loading="loading" />
						</form>
						<Btn
							class="border-light mt-1 w-50"
							text="back"
							@click="togglePhoneLogin" />
					</center>
				</div>
				<div v-else>
					<!-- <GoogleLoginButton
						class="rounded-0 mt-2"
						@click="onSocial('google')" /> -->
					<Btn
						v-if="!isSecure"
						class="border-light mt-1 w-75"
						text="login with email"
						@click="togglePhoneLogin" />
				</div>
			</div>
		</div>
	</div>
</template>
