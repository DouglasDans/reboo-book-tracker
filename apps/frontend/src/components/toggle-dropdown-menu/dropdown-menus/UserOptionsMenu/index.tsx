import Icon from '@/components/icon'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import { User } from '@/api/reboo-api/api.types'

type Props = {
  user: User
}

export default function UserOptionsMenu({ user }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Icon name="person" />
        <div className={styles.data}>
          <h6>{user.name}</h6>
          <small>{user.email}</small>
        </div>
      </div>
      <div className={styles.options}>
        <Link className={styles.optionItem} href={"/logout"}>
          <Button fullWidth variant='secondary' notRounded startDecorator={<Icon name='logout' />}>Fazer Logout</Button>
        </Link>
      </div>
    </div>
  )
}