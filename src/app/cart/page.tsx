"use client"
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-[1220px] mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <Link href="/AllProducts">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1220px] mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 border rounded-lg shadow-sm">
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.title}</p>
                <p className="text-sm text-gray-500 mt-1">Size: <span className="uppercase font-semibold">{item.size}</span></p>
                <p className="text-lg font-bold mt-2">${item.price}</p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex gap-x-2 items-center">
                    <button
                      className="border bg-green-400 h-8 w-8 rounded-full flex justify-center items-center"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="border h-8 w-8 bg-green-400 rounded-full flex justify-center items-center"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-red-600 hover:text-red-800 text-sm font-semibold"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 shadow-sm sticky top-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button className="w-full mb-2 bg-green-600 hover:bg-green-700">
              Proceed to Checkout
            </Button>

            <Link href="/AllProducts">
              <Button variant="outline" className="w-full mb-2">
                Continue Shopping
              </Button>
            </Link>

            <button
              className="text-red-600 hover:text-red-800 text-sm font-semibold w-full"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
