import { Collection } from '@/api/reboo-api/api.types'
import styles from './index.module.scss'
import ColorButton from '@/components/buttons/color-button'
import Link from 'next/link'
import Icon from '@/components/icon'

type Props = {
  collections: Collection[]
}

export default function CollectionView({ collections }: Props) {
  return (
    <div className={`${styles.content}`}>
      {collections.map(collection => {
        return (
          <Link href={`library/collection/${collection.id}`} key={collection.id}>
            <ColorButton decorator={<Icon name='collections_bookmark' />} value={collection.name} color={collection.backgroundColors} />
          </Link>
        )
      })}
    </div>
  )
}