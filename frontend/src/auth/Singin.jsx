function Signin() {
  return (
    <>
      <div className="h-dvh w-full  flex justify-center items-center">
        <form className="py-10 px-6 bg-gray-900 flex flex-col gap-4 rounded-xl">
          <div className="flex flex-col gap-2">
            <label>Username</label>
            <input
              className="bg-transparent text-gray-300 text-[14px] outline-none border border-gray-700 rounded-lg py-1.5 px-2"
              placeholder="Your Username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
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
