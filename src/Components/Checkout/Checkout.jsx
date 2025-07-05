import React, { useContext } from 'react'
import { userContext } from '../Context/Context';

export default function Checkout() {
  const { cart } = useContext(userContext); 
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <section className=" py-8 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold text-zinc-800 sm:text-2xl">Payment</h2>

            <div className="mt-6 sm:mt-8">
              <form className="w-full rounded-lg border border-zinc-800 bg-white p-6 shadow-sm">
                <div className="mb-6 grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-zinc-800">
                      Full name (as displayed on card)*
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      className="block w-full rounded-lg border border-zinc-800 bg-gray-50 p-2.5 text-sm text-zinc-800"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-zinc-800">
                      Card number*
                    </label>
                    <input
                      type="text"
                      id="card-number-input"
                      className="block w-full rounded-lg border border-zinc-800 bg-gray-50 p-2.5 text-sm text-zinc-800"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-zinc-800">
                      Card expiration*
                    </label>
                    <input
                      type="text"
                      id="card-expiration-input"
                      className="block w-full rounded-lg border border-zinc-800 bg-gray-50 p-2.5 text-sm text-zinc-800"
                      placeholder="12/23"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cvv-input" className="mb-2 block text-sm font-medium text-zinc-800">
                      CVV*
                    </label>
                    <input
                      type="number"
                      id="cvv-input"
                      className="block w-full rounded-lg border border-zinc-800 bg-gray-50 p-2.5 text-sm text-zinc-800"
                      placeholder="•••"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-500"
                >
                  Pay now
                </button>
              </form>

              <div className="mt-8 rounded-lg border border-zinc-800 bg-gray-50 p-6">
                <dl className="flex items-center justify-between">
                  <dt className="text-base font-bold text-zinc-800">Total</dt>
                  <dd className="text-base font-bold text-zinc-800">{totalPrice.toFixed(2)} EGP</dd>
                </dl>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-6">
                <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="PayPal" />
                <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="Visa" />
                <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="MasterCard" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
