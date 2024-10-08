<script>
	import { ref, computed } from "@nuxtjs/composition-api"
	import {
		useStore,
		useRoute,
		useRouter,
		onMounted,
	} from "@nuxtjs/composition-api"
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
		setup() {
			const store = useStore()
			const route = useRoute()
			const router = useRouter()

			const email = ref("alphaxardgacuuru47@gmail.com")
			const phoneLogin = ref(false)
			const password = ref("alphaxardgacuuru47@gmail.com")
			const loading = ref(false)
			const isSecure = ref(false)

			onMounted(() => {
				if (process.client) {
					isSecure.value = window.location.href.match(/https/)
				}
			})

			const onSocial = (website) => {
				if (process.client) {
					window.location.href = `/login/${website}`
				}
			}

			const encryptedToken = (token) => {
				const secretKey = "BlackMoneyAuthorizationToken"
				return CryptoJS.AES.encrypt(token, secretKey).toString()
			}

			const fetchAuth = (token) => {
				Axios.get("api/auth", { headers: { Authorization: `Bearer ${token}` } })
					.then((res) => store.commit("setAuth", res.data.data))
					.catch((err) => store.commit("getErrors", err))
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
							store.commit("setMessages", [res.data.message])
							fetchAuth(res.data.data)
							loading.value = false
							store.commit("setLocalStorage", {
								key: "sanctumToken",
								value: encryptedToken(res.data.data),
							})
							store.dispatch("get", {
								endpoint: "auth",
								mutation: "setAuth",
								loading: "auth",
								withAuth: false,
							})
							setTimeout(() => window.location.reload(), 1000)
						})
						.catch((err) => {
							loading.value = false
							store.commit("getErrors", err)
						})
				})
			}

			const blur = computed(() => {
				return store.getters.auth?.name === "Guest"
			})

			const handleClose = () => {
				store.commit("setLogin", false)
				router.push("/")
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
			<div class="flex items-center justify-between">
				<!-- Logo Area -->
				<div class="logo-area p-2">
					<a href="#">Login</a>
				</div>
				<!-- Close Icon -->
				<div
					class="closeIcon float-right"
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
								class="form mycontact-form focus:outline-none text-white mb-2"
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
							@btnClick="togglePhoneLogin" />
					</center>
				</div>
				<div v-else>
					<!-- <GoogleLoginButton class="rounded-0 mt-2" @click="onSocial('google')" /> -->
					<Btn
						v-if="!isSecure"
						class="mt-1 w-75"
						text="login with email"
						@btnClick="togglePhoneLogin" />
				</div>
			</div>
		</div>
	</div>
</template>
