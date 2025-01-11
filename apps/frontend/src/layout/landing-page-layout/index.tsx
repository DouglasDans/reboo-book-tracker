import Header from './header-container'
import { Fragment, PropsWithChildren } from 'react'
import styles from './index.module.scss'
import Footer from '@/components/footer'

export default function LandingPageLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}