import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import styles from "../../styles/Home.module.css"
import Link from "next/link"
import { Count } from "../../src/components/Count"

type Props = {
  id: string
}

const Home: NextPage<Props> = ({ id }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Article {id}</h1>
        <Count name="foo" initialValue={0} />
        <Count name="bar" initialValue={10} />
        <Count name="baz" initialValue={100} />
        <ul>
          <li>
            <Link href="/demo/1">article 1</Link>
          </li>
          <li>
            <Link href="/demo/2">article 2</Link>
          </li>
          <li>
            <Link href="/demo/3">article 3</Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props, { id: string } > = async ({
  params: { id },
}) => {
  return {
    props: {
      id,
    },
  }
}
