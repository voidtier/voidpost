import { useState } from "react";

function Signin() {
  const [form, set_form] = useState({
    email: "",
    password: "",
  });

  function get_values(e) {
    const { name, value } = e.target;

    set_form((other) => {
      return { ...other, [name]: value };
    });
  }

  async function submit_form(e) {
    e.preventDefault();
    console.log(form);
    try {
      const response = await fetch("http://localhost:4000/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="h-dvh w-full  flex justify-center items-center">
        <form
          onSubmit={submit_form}
          className="py-10 px-6 bg-gray-900 flex flex-col gap-4 rounded-xl"
        >
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              onChange={get_values}
              name="email"
              className="bg-transparent text-gray-300 text-[14px] outline-none border border-gray-700 rounded-lg py-1.5 px-2"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              onChange={get_values}
              name="password"
              className="bg-transparent text-gray-300 text-[14px] outline-none border border-gray-700 rounded-lg py-1.5 px-2"
              placeholder="Your Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 text-[14px] cursor-pointer outline-none rounded-lg py-1.5 px-2 hover:bg-gray-600 transition-all duration-300"
          >
            Signin
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
