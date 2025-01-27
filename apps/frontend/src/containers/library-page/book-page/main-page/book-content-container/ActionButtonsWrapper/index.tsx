import { Book } from '@/api/reboo-api/api.types'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import Link from 'next/link'
import DeleteBookButtonContainer from './DeleteBookButtonContainer'
import BookStatusSwitcher from '@/components/toggle-dropdown-menu/dropdown-menus/bookStatusSwitcher'
import ToggleDropdownMenu from '@/components/toggle-dropdown-menu'

type Props = {
  book: Book
}

export default function ActionButtonsWrapper({ book }: Props) {
  return (
    <div className={styles.container}>
      <h5>Ações</h5>

      <div className={styles.wrapper}>
        {/* <Link href={`/${book.userId}/stats/session/add?bookId=${book.id}`} className={styles.buttons}>
          <Button fullWidth variant='secondary' startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
        </Link> */}

        <ToggleDropdownMenu fullWidth content={<BookStatusSwitcher book={book} />}>
          <Button fullWidth variant='secondary' endDecorator={<Icon name='expand_all' />}>
            Status de Leitura
          </Button>
        </ToggleDropdownMenu>

        <Link href={`./${book.id}/edit`} className={styles.linkAction} >
          <Button fullWidth variant='secondary' startDecorator={<Icon name='edit' />}>
            Editar Livro
          </Button>
        </Link>

        <DeleteBookButtonContainer />
      </div>
    </div>
  )
}