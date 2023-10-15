import BrandIcon from '@/ui/svg/BrandIcon'
import { Badge} from 'flowbite-react'

export function BrandLogo(props) {
  return (
    <div className='flex-between' style={{ color: 'inherit' }} {...props}>
      <BrandIcon width={43} height={43} />
      <span className={'text-3xl font-bold ml-2 flex'}>Rentonest <Badge color={'warning'}>TEST</Badge> </span>
    </div>
  )
}

export default BrandLogo
