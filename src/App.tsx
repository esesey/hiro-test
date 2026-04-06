import { IconButton } from "./shared/ui/icon-button";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import CrossIcon from "./assets/icons/close.svg?react";

function App() {
  return (
    <div className="h-full w-full max-w-screen relative min-h-screen flex flex-col">
      <Header />
      <main className="fix-container">
        <h1 className="text-center uppercase text-[4rem] font-kelly-slab mt-10 mb-8">
          Аккаунт
        </h1>
        <div className="flex w-full justify-between items-center mb-8">
          <div className="font-kelly-slab text-[2.75rem] leading-11">
            Квесты
          </div>
          <IconButton>
            <CrossIcon />
          </IconButton>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
