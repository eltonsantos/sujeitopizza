import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function Home() {
  return (
    <>
    <Head>
      <title>SujeitoPizza - Faça seu login</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

      <div className={styles.login}>
        <form>
          <Input
            placeholder="Digite seu email"
            type="text"
          />

          <Input
            placeholder="Sua senha"
            type="password"
          />
          
          <Button
            type="submit"
            loading={false}
          >
            Acessar
          </Button>
        </form>

        <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>

      </div>
    </div>
    </>
  )
}