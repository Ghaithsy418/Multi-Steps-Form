export function formatPrice(price, planType) {
  return `$${price}/${planType}`;
}

export function formatServicesPrice(price, planType) {
  return `+$${price}/${planType}`;
}
