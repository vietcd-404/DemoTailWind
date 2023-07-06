import MainView from "./componments/MainView";
import Trending from "./componments/Trending";
import Header from "./layout/header";
import Nav from "./pages/nav";

function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav></Nav>
      <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
        <MainView />
        <Header />
        <Trending />
      </main>
    </div>
  );
}

export default App;
