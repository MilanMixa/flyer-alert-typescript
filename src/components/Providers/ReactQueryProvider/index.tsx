import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

export type OptionContextProviderType = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const ReactQueryProvider: FC<OptionContextProviderType> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
