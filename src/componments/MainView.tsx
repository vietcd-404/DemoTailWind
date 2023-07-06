function MainView() {
  return (
    <div className="flex md:justify-end justify-center">
      <button className="border-2 border-blue-950 px-4 py-2 rounded uppercase text-xl mr-2 cursor-pointer hover:bg-blue-950 hover:text-white">
        Login
      </button>
      <button className="border-2 border-blue-950 px-4 py-2 rounded uppercase text-xl mr-2 cursor-pointer  hover:bg-blue-950 hover:text-white">
        Register
      </button>
    </div>
  );
}

export default MainView;
