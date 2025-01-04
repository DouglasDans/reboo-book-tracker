'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import Icon from '@/components/icon';
import Button from '@/components/buttons/button';
import { makeRegister } from '@/actions/user.action';
import Input from '@/components/forms/input';

export default function RegisterPage() {
  const [wrongPassword, setWrongPassword] = useState<boolean>(false)
  const [emailInUse, setEmailInUse] = useState<boolean>(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setWrongPassword(false)
    setEmailInUse(false)

    const data = {
      name: event.currentTarget.nameUser.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    }

    if (data.password !== data.confirmPassword) {
      setWrongPassword(true)
      return null
    } else {
      await makeRegister(data).catch(() => {
        setEmailInUse(true)
      })
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={'/reboo-logo.svg'} alt='Logo do Aplicativo' height={200} width={200} />
      </div>
      <div className={styles.right}>
        <div className={styles.topContainer}>
          <Link href={"/login"}>
            <Icon name='arrow_back' />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <h3>Registrar no Reboo</h3>

          <div className={styles.inputWrapper}>
            <div className={styles.inputs}>
              <Input title='Nome' required name="nameUser" type="text" placeholder='Nome' />
              <Input title='Email' required error={emailInUse} errorSubtitle={"O email já está sendo usado"} name='email' type="email" placeholder='Email' />
              <Input title='Senha' required error={wrongPassword} errorSubtitle='As senhas não coincidem' name="password" type="password" placeholder='Senha' />
              <Input title='Confirmar Senha' required className={wrongPassword ? styles.wrongPassword : ""} name="confirmPassword" type="password" placeholder='Confirmar Senha' />
            </div>
            <Button type='submit' fullWidth>Registrar</Button>
          </div>

          {/* <h6>Ou</h6>

          <Button variant='secondary' fullWidth>
            <Image src={"/icons/google-icon.svg"} alt='Logo do Google' height={20} width={20} />
            Registrar com Google
          </Button> */}
        </form>
      </div>
    </div>
  );
}