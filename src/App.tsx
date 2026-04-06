import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import { QuestsSection } from "./widgets/quests-section";

function App() {
  return (
    <div className="h-full w-full max-w-screen relative min-h-screen flex flex-col">
      <Header />
      <main className="fix-container">
        <h1 className="text-center uppercase text-[4rem] font-kelly-slab mt-10 mb-8">
          Аккаунт
        </h1>
        <QuestsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
