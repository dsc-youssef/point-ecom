const websiteRewrites = [
  { source: '/', destination: '/website/home' },
  { source: '/shop', destination: '/website/shop' },
  { source: '/faq', destination: '/website/faq' },
  { source: '/cart', destination: '/website/cart' },
  { source: '/product:id', destination: '/website/product:id' },
  { source: '/account', destination: '/website/account' },
];

module.exports = websiteRewrites;
