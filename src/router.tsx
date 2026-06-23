import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

let router: ReturnType<typeof createRouter> | undefined;

export function getRouter() {
  if (!router) {
    const queryClient = new QueryClient();

    router = createRouter({
      routeTree,
      context: { queryClient },
    });
  }

  return router;
}
