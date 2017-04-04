import Head from 'next/head';
import Link from 'next/link';
import Title from '../components/Title/title';

export default () => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Title title="Home page" />
        <Link href="/about">
            <a>Go to About</a>
        </Link>
    </div>
)