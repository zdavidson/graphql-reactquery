import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Continents from "./Continents";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Continents />
      </div>
    </QueryClientProvider>
  );
}

export default App;
