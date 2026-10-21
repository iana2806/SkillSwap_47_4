import type { RootState } from '@/store'
import { Footer, Header } from '@/widgets'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import styles from './AppLayout.module.css'

export const AppLayout = () => {
  const user = useSelector((state: RootState) => state.user.user)
  const variant = user ? 'auth' : 'unauth'
  return (
    <>
      <Header variant={variant} />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.demoNotice} role="status">
            Демо-режим: данные сохраняются только в этом браузере и не передаются другим
            пользователям. Не вводите настоящие пароли или личные данные.
          </div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
