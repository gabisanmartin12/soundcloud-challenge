import { HouseList } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-[100dvh] m-auto max-w-[1200px] p-4">
        <h1 className="text-3xl lg:text-4xl mb-8">Ice & fire</h1>
        <HouseList />
      </main>
      <footer className="sticky bottom-0 text-right text-white/60 italic p-4">
        by{" "}
        <a
          href="https://linkedin.com/in/gasanmartin"
          target="_blank"
          className="font-bold"
        >
          Gabriel San Martin
        </a>
      </footer>
    </QueryClientProvider>
  );
}

export default App;
