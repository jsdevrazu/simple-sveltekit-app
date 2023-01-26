<script>
  import Seo from "$lib/components/seo.svelte";
  import { form, field } from "svelte-forms";
  import { required } from "svelte-forms/validators";
  import Input from "$lib/components/input.svelte";
  import { login } from "$lib/utils/helper";
  import { ADMIN_LOGIN } from "$lib/utils/apiEndPoints";
  import { goto } from "$app/navigation";
  import { auth } from "../../store/store";
  import { onMount } from 'svelte'

  const email = field("email", "", [required()]);
  const password = field("password", "", [required()]);
  const myForm = form(email, password);
  let loading = false;

  async function handleSubmit() {
    await myForm.validate();
    const check = $myForm.valid;
    if (check) {
      const payload = {
        email: $email.value,
        password: $password.value,
      };
      loading = true;
      const res = await login(payload, ADMIN_LOGIN);
      if (res.data) {
        $auth.user = res.data.user;
        $auth.token = res.data.token;
        localStorage.setItem("user", JSON.stringify(res.data));
        loading = false;
        goto("/");
      } else {
        console.log(res.error);
      }
    }
  }

  onMount(() =>{
    if(localStorage.getItem("user")){
      goto("/")
    }
  })
</script>

<div
  class="bg-no-repeat bg-cover bg-center relative"
  style="background-image: url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80);"
>
  <div
    class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"
  />
  <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
    <div
      class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10"
    >
      <div class="self-start hidden lg:flex flex-col  text-white">
        <h1 class="mb-3 font-bold text-5xl">Hi ? Welcome Back</h1>
        <p class="pr-3">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </p>
      </div>
    </div>
    <div class="flex justify-center self-center  z-10">
      <div class="p-12 bg-white mx-auto rounded-2xl w-100 z-[100]">
        <div class="mb-4">
          <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
          <p class="text-gray-500">Please sign in to your account.</p>
        </div>
        <div class="space-y-5">
          <Input
            labelName="Email"
            bind:value={$email.value}
            type="text"
            error={$myForm.hasError("email.required")}
            placeholder="Enter email"
          />
          <Input
            labelName="Password"
            bind:value={$password.value}
            type="password"
            error={$myForm.hasError("password.required")}
            placeholder="Enter password"
          />
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <div class="text-sm">
              <a href="/signup" class="text-green-400 hover:text-green-500">
                signup
              </a>
            </div>
          </div>
          <div>
            <button
              on:click={handleSubmit}
              disabled={loading}
              type="submit"
              class="app_btn"
            >
              {loading ? "loading...." : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Seo title="My App - Login" description="Cool" />
