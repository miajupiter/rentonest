// import {Image} from 'next/image'
export function TeamMember({ fullName, imageUrl, position, description }) {
  return (
    <div className='text-center text-gray-500 dark:text-gray-400'>
      <img
        className='mx-auto mb-4 w-36 h-36 rounded-full'
        src={imageUrl}
        alt={fullName}
      />
      <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        <a href={imageUrl} target='_blank'>
          {fullName}
        </a>
      </h3>
      <p>{position}</p>
      <p>{description}</p>
      <ul className='flex justify-center mt-4 space-x-4'>
        <li>
          <a
            href='#'
            className='text-[#ea4c89] hover:text-gray-900 dark:hover:text-white'
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export function Team(props) {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Our team
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
            Every team member is a building block of our company.
          </p>
        </div>
        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          <TeamMember
            fullName='Ali TEK'
            position={'Senior Software Engineer'}
            description={'NodeJs, NextJs, MongoDB, DevOps'}
            imageUrl={'/assets/img/team/alitek04.jpg'}
          />
          <TeamMember
            fullName='Arda'
            position={'Senior Developer (Front-End)'}
            description={'React.js, Nextjs, Tailwindcss'}
            imageUrl={'/assets/img/team/arda.jpg'}
          />
          <TeamMember
            fullName='Mehmet Tahir'
            position={'Web Designer'}
            description={'Id pariatur consectetur esse in exercitation.'}
            imageUrl={'/assets/img/team/memo01.jpg'}
          />
        </div>
      </div>
    </section>
  )
}

// export function Team(props) {
//   return (
//     <section className=''>
//       <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
//         <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
//           <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
//             Our Team
//           </h2>
//           <p className='font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
//             Explore the whole collection of open-source web components and
//             elements built with the utility classes from Tailwind
//           </p>
//         </div>
//         <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
//           <TeamMember
//             fullName='Shaman Coder'
//             position={'Project Manager & Senior Software Engineer'}
//             description={
//               'Dolor anim nostrud commodo voluptate nostrud cupidatat consectetur do exercitation ullamco aute.'
//             }
//             imageUrl={'/assets/img/team/alitek04.jpg'}
//           />
//           <TeamMember
//             fullName='Feridun ABI'
//             position={'Marketing & Sales Manager'}
//             description={
//               'Laboris duis aute duis non non nostrud duis eu ullamco aute est incididunt.'
//             }
//             imageUrl={'/assets/img/team/feridunabi.jpg'}
//           />
//           <TeamMember
//             fullName='Arda'
//             position={'Senior Developer (Front-End)'}
//             description={
//               'React.js, Nextjs, Tailwindcss'
//             }
//             imageUrl={'/assets/img/team/arda.jpg'}
//           />
//           <TeamMember
//             fullName='Memo'
//             position={'Web Designer'}
//             description={
//               'Id pariatur consectetur esse in exercitation.'
//             }
//             imageUrl={'/assets/img/team/memo01.jpg'}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

export default Team
