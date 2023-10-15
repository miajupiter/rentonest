const TickIcon = () => (
  <svg
    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export function PriceList(props) {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Designed for business teams like yours
          </h2>
          <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
            Here at MiaJupiter we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className=' space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          <div className='relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-blue-900/50 dark:text-white pb-12'>
            <h3 className='mb-4 text-2xl font-semibold'>Standard</h3>
            <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
              Best option for personal use & small businesses.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='mr-2 text-4xl font-extrabold'>Always Free</span>
              {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
            </div>
            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>1 user</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>No setup, or hidden fees</span>
              </li>

              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Free document support</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Free updates</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Download your data</span>
              </li>
            </ul>
            <a
              href='#'
              className='absolute bottom-5 start-5 end-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
            >
              Get started1
            </a>
          </div>
          <div className='relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-blue-900/50 dark:text-white pb-12'>
            <h3 className='mb-4 text-2xl font-semibold'>Company</h3>
            <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
              Relevant for multiple users, extended & premium support.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='text-gray-500 dark:text-gray-400 me-2'>
                +1 User
              </span>
              <span className='mr-2 text-5xl font-extrabold'>€12</span>
              <span className='text-gray-500 dark:text-gray-400'>/month</span>
            </div>
            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Standard package features</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Max 10 Users</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Premium support</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Plugin usage</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>1 Daily + 1 Weekly + 1 Monthly backup</span>
              </li>
            </ul>
            <a
              href='#'
              className='absolute bottom-5 start-5 end-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
            >
              Get started
            </a>
          </div>
          <div className='relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-blue-900/50 dark:text-white pb-12'>
            <h3 className='mb-4 text-2xl font-semibold'>Enterprise</h3>
            <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className='flex justify-center items-baseline my-8'>
            <span className='text-gray-500 dark:text-gray-400 me-2'>
                +1 User
              </span>
              <span className='mr-2 text-5xl font-extrabold'>€24</span>
              <span className='text-gray-500 dark:text-gray-400'>/month</span>
            </div>
            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Standard package features</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Max 50 Users</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Premium support</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>Plugin usage</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>1 Daily + 4 Weekly + 12 Monthly backups</span>
              </li>
              <li className='flex items-center space-x-3'>
                <TickIcon />
                <span>2 Custom integrations</span>
              </li>
            </ul>
            <a
              href='#'
              className='absolute bottom-5 start-5 end-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceList
