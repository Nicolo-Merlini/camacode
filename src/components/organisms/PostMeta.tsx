import Head from 'next/head'
import React from 'react'

const PostMeta = () => {
    const description = 'Creiamo soluzioni software innovative per una trasformazione digitale di successo. Affidati a noi per realizzare i tuoi progetti.'
    const canonicalUrl = 'www.camacode.com'
    const image = ''
    const title = 'Camacode | Making Impossible, Possible.'
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link
                rel="canonical"
                href={canonicalUrl}  /* "https://example.com/blog/original-post" */
                key="canonical"
            />
            <link rel="icon" href="/favicon.ico" />

            {/* open-graph meta */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            {image && <meta property="og:image" content={image} />}
            {/* twitter card meta */}
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {image && < meta property="twitter:image" content={image} />}
        </Head>
    )
}

export default PostMeta