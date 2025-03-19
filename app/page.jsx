import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <ContextAlert />
                <h1 className="mb-0">Telegram 中文版纸飞机介绍</h1>
                <p>
            Telegram 是一款安全、快速的即时通讯软件，因其强大的功能和良好的用户体验而受到广泛欢迎。Telegram 中文版纸飞机应用专为中文用户设计，提供流畅的使用体验和本地化的服务。
        </p>
        <h2>主要特点</h2>
        <ul>
            <li>安全性：Telegram 提供端到端加密，确保用户隐私。</li>
            <li>快速消息传递：无论是文本、图片还是视频，都能迅速发送。</li>
            <li>多平台支持：可在手机、平板和电脑等多个设备上使用。</li>
            <li>丰富的功能：支持群组聊天、频道订阅、文件分享等多种功能。</li>
        </ul>
        <h2>下载链接</h2>
        <p>
            您可以通过以下链接下载 Telegram 中文版纸飞机：
        </p>
                <Link
                    href="https://www.zifeiji.com"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                   纸飞机下载 
                </Link>
            </section>
           
        
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
