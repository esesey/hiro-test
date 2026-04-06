import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";

function App() {
  return (
    <div className="h-full w-full max-w-screen relative min-h-screen flex flex-col">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
