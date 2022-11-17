/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement, React } from 'react';
import { LayoutProvider } from 'layouts/LayoutProvider';
import { DefaultLayout } from 'layouts/DefaultLayout';
import type { GatsbySSR } from 'gatsby';
import { Script, ScriptStrategy } from 'gatsby';
import '@fontsource/cairo';
import '@fontsource/text-me-one';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
    return <LayoutProvider>{element}</LayoutProvider>;
};

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
    if ((element.type as any).Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = (element.type as any).Layout ?? DefaultLayout;
    return (
        <Layout {...props}>
            {element}
            <Script src="https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap" />
            <Script src="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900;1000&display=swap" />
        </Layout>
    );
};
export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
              if (url.hostname.includes('google-analytics')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }

                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)

                return proxyUrl
              }

              return url
           }
         }`,
            }}
        />,
    ]);
};