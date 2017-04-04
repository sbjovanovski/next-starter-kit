import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import globalStyles from './global_styles/global.scss';

export default class extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head } = renderPage();
        return { html, head }
    }

    render() {
        return (
            <html>
            <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
