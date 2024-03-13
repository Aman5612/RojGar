export function checkImgUrl(imageUrl: string): boolean {
  const pattern = new RegExp(
    "^https?://.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
    "i"
  );
  return pattern.test(imageUrl);
}
