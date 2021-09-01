import Link from 'next/Link';
import Head from 'next/Head';

export default function Header(props) {
    return(
        <header className="header"> 
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles/page.css"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>
            </Head>
            <Link href="/">
                <a>
                   <img alt="Logo treinaCook" src="/img/logo.svg" />
                </a>
            </Link>  
        </header>
    )
}