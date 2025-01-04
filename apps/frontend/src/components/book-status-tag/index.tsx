import { BookStatus } from '@/api/reboo-api/api.types';
import styles from './index.module.scss'

type Props = {
  status: BookStatus,
  canSelect?: boolean,
  active?: boolean
}

const textSpan = {
  BUY: {
    title: "Comprar"
  },
  NOT_STARTED: {
    title: "Não Iniciado"
  },
  IN_PROGRESS: {
    title: "Em Andamento"
  },
  COMPLETED: {
    title: "Concluído"
  },
  GIVEN_UP: {
    title: "Desistiu"
  },
}

export default function BookStatusTag({ status, canSelect = false, active = false }: Props) {

  const classNames = [styles.tag, styles[status]];

  if (canSelect) {
    classNames.push(styles.selectable);
  }

  if (active) {
    classNames.push(styles.active);
  }

  return (
    <span className={classNames.join(' ')}>{textSpan[status].title}</span>
  );
}
