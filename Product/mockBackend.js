/**
 * Mock backend service
 * Simulates adding an item to the cart
 */
const mockBackend = {
  /**
   * @param {Object} product - Product object { id, name, price }
   * @returns {Promise<Object>}
   */
  addToCart(product) {
    return new Promise((resolve, reject) => {
      console.log(`[API] Processing request for: ${product.name}...`);

      // Simulate network latency (1.5s – 2.5s)
      const latency = Math.floor(Math.random() * 1000) + 1500;

      setTimeout(() => {
        // Simulate random server error (40% failure rate)
        const shouldFail = Math.random() < 0.4;

        if (shouldFail) {
          console.error('[API] 500 Server Error');

          reject({
            success: false,
            status: 500,
            error: 'Database connection timeout. Please try again.'
          });
        } else {
          console.log('[API] 200 OK');

          resolve({
            success: true,
            status: 200,
            message: 'Item added to cart.',
            cartTotal: Math.floor(Math.random() * 10) + 1
          });
        }
      }, latency);
    });
  }
};

// Make available globally
window.mockBackend = mockBackend;
