import Link from 'next/link';
import Title from '../components/Title/title';

export default () => (
    <div>
        <Title title="About" />
        <Link href="/">
            <a>Go back</a>
        </Link>
    </div>
)