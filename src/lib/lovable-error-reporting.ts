export function reportLovableError(error: unknown, context?: { boundary?: string }) {
  if (context?.boundary) {
    console.error(`[${context.boundary}]`, error);
    return;
  }

  console.error(error);
}