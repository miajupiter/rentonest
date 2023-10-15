import BrandLogo from '../components/BrandLogo'


export function Footer(props) {
  return (
    <footer className='p-4 bg-white sm:p-6 dark:bg-gray-800/40'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='https://rentonest.miajupiter.com' className='flex items-center'>
              <BrandLogo />
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Resources
              </h2>
              <ul className='text-gray-600 dark:text-gray-400'>
                <li className='mb-4'>
                  <a href='https://rentonest.miajupiter.com' className='hover:underline'>
                    Rentonest
                  </a>
                </li>
                {/* <li>
                  <a href='https://miastart.com/' className='hover:underline'>
                    MiaStart
                  </a>
                </li>
                <li>
                  <a
                    href='https://connectorjs.com/'
                    className='hover:underline'>
                    ConnectorJS
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Follow us
              </h2>
              <ul className='text-gray-600 dark:text-gray-400'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/miajupiter'
                    className='hover:underline '>
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/company/miajupiter'
                    className='hover:underline'>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Legal
              </h2>
              <ul className='text-gray-600 dark:text-gray-400'>
                <li className='mb-4'>
                  <a href='/legal/privacy-policy' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='/legal/terms-and-conditions' className='hover:underline'>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <a href='https://rentonest.miajupiter.com' className='hover:underline'>
              Rentonest
            </a>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <a
              href='https://github.com/miajupiter/rentonest'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a
              href='https://www.youtube.com/@miajupiter'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'>
                <path
                  fill='currentColor'
                  d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'
                />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/company/miajupiter'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                />
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
