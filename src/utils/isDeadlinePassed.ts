export function isDeadlinePassed(currentDeadline: Date | null) {
  if (currentDeadline === null) return false;
  return currentDeadline < new Date();
}
