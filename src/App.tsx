import { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import { router } from "./Router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Suspense fallback={null}>
          <RouterProvider router={router} />
        </Suspense>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
