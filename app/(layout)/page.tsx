import Wordle from "@/features/wordle-game/Wordle";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-4 sm:p-12 xl:p-24">
      <Wordle />
      <Footer />
    </main>
  );
}
