import Nav_link from "./Nav_link";

function Nav_bar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-mist-900">
        <div id="home" className="text-4xl text-blue-700">
          Home
        </div>
        <div className="flex gap-x-6 pr-6 ">
          <Nav_link />
        </div>
        <div className=""></div>
      </nav>
    </>
  );
}

export default Nav_bar;
