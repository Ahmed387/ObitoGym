import React from 'react'

const Price = () => {
  return (
    <div class="pt-5 bg-white" id="pricing">
  <div class="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h1 class="text-base font-semibold leading-7 text-indigo-400">Pricing</h1>
      <p class="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">Ready to Start Your Journey with us</p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Choose the product that works best</p>
    <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {/* <!-- First Product --> */}
      <div class="ring-1 ring-black rounded-3xl p-8 xl:p-10">
        <div class="flex items-center justify-between gap-x-4">
          <h2 id="product1" class="text-lg font-semibold leading-8 text-black">Product Type 1</h2>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-600">Product details for Product Type 1</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-black">€ 10 / unit</span><span class="text-sm font-semibold leading-6 text-gray-600"></span>
        </p>
        <a href="/order" aria-describedby="product1"
          class="bg-white/10 text-black hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Join Now</a>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>2 hours of excercises </li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Free consultaion to coaches</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>see more benefits</li>
        </ul>
      </div>

      {/* <!-- Second Product --> */}
      <div class="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
        <div class="flex items-baseline justify-between gap-x-4">
          <h2 id="product2" class="text-lg font-semibold leading-8 text-black">Product Type 2</h2>
          <p class="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-black">Most popular</p>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-600">The most popular choice. Product details for Product Type 2</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-black">€ 20 / unit</span><span class="text-sm font-semibold leading-6 text-gray-600"></span>
        </p>
        <a href="/order" aria-describedby="product2"
          class="bg-indigo-500 text-black shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Join Now</a>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>2 hours of excercises</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Free consultaion to coaches</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Accessto Minibar</li>
        </ul>
      </div>

      {/* <!-- Third Product --> */}
      <div class="ring-1 ring-black rounded-3xl p-8 xl:p-10">
        <div class="flex items-center justify-between gap-x-4">
          <h2 id="product3" class="text-lg font-semibold leading-8 text-black">Product Type 3</h2>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-600">Product details for Product Type 3</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-black">€ 50 / unit</span><span class="text-sm font-semibold leading-6 text-gray-600"></span>
        </p>
        <a href="/order" aria-describedby="product3"
          class="bg-white/10 text-black hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Join Now</a>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>8 Hours of excercises</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Free consultaion to coaches</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-black">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Consultataion Of Private Coach</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  )
}

export default Price