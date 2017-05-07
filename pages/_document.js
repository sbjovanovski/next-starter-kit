import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import globalStyles from './global_styles/global.scss';

export default class extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head } = renderPage();
        return { html, head }
    }

    render() {
        return (
            <html>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
