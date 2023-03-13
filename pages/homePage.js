import Navbar from '../components/navbar'
import Head from 'next/head'
import Image from 'next/image'
import AddProject from '../components/add-project'

export default function HomePage() {
        return <>
                <Head>
                        <title>Studio Stunnit Admin</title>
                        <meta name="description" content="This is the studio sunnit admin" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                </Head>
                        <main className='' >
                                <Navbar />
                                <AddProject />
                        </main>
                </>
}

