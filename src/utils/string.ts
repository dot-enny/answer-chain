export function truncate(s: string, head = 6, tail = 4) {
  if (!s) return s;
  if (s.length <= head + tail + 3) return s;
  return `${s.slice(0, head)}...${s.slice(-tail)}`;
}
