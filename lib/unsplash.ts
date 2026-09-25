/**
 * Every id here has been verified to resolve on images.unsplash.com.
 * These stand in for licensed photography — swap the `recommendedFilename`
 * shot when real photos are ready, no other code needs to change.
 */
export function unsplash(id: string, width = 1600, height?: number) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "80",
    w: String(width),
  });
  if (height) params.set("h", String(height));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}
