<script>
    import Seo from "$lib/components/seo.svelte";
    import { form, field } from "svelte-forms";
    import { required } from "svelte-forms/validators";
    import Input from "$lib/components/input.svelte";
    import { goto } from "$app/navigation";
  
    const email = field("email", "", [required()]);
    const password = field("password", "", [required()]);
    const username = field("username", "", [required()]);
    const myForm = form(email, password, username);
    let loading = false;
  
    async function handleSubmit() {
      await myForm.validate();
      const check = $myForm.valid;
      if (check) {
        goto("/");
      }
    }
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
          <h1 class="mb-3 font-bold text-5xl">Welcome to Signup Page</h1>
          <p class="pr-3">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
        </div>
      </div>
      <div class="flex justify-center self-center  z-10">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100 z-[100]">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign Up</h3>
            <p class="text-gray-500">Please sign up to create an new account.</p>
          </div>
          <div class="space-y-5">
            <Input
              labelName="Username"
              bind:value={$username.value}
              type="text"
              error={$myForm.hasError("username.required")}
              placeholder="Enter username"
            />
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
                <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                  Already have an account
                </label>
              </div>
              <div class="text-sm">
                <a href="/login" class="text-green-400 hover:text-green-500">
                login
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
                {loading ? "loading...." : "Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Seo title="My App - Signup" description="Cool" />
  