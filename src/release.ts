export function release(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve));
}
