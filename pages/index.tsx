import Head from 'next/head';
import React, { useState } from 'react';
import TextH1 from '../components/atom/text/textH1';
import { client } from '../lib/api/apolloClient';
import { ApolloProvider } from '@apollo/client';
import CardXL from '../components/molecule/cards/cardXL';
import CardStatus from '../components/molecule/cards/cardStatus';
import CardListIcons from '../components/molecule/cards/cardListIcons';
import TextDefault from '../components/atom/text/TextDefault';
import CardInfos from '../components/molecule/cards/cardInfos';
import CardNews from '../components/molecule/cards/cardNews';
import LATEST_ARTICLES_QUERY from '../lib/api/article/latest-articles';
import Query, { getStrapiMedia } from '../lib/api/api';
import CardListText from '../components/molecule/cards/cardListText';
import {useWindowSize} from "../lib/motion/sizeWindow";
import TextH5 from "../components/atom/text/textH5";
import WidgetContact from "../components/molecule/widget/contact/widgetContact";
import Image from "next/image";

export default function Home() {
    const [displayNewsletter, setNewsletter] = useState('false');
    const size = useWindowSize();
    const statusAOS = size && size.width !== undefined;

    if (!client) {
        // TODO: Do progress bar
        return <TextDefault>Loading</TextDefault>;
    }

    /*const displayingNewsletter = () => {
        setNewsletter(!displayNewsletter);
    };

    const closingNewsletter = () => {
        setNewsletter('false');
    };*/
    let fragmentPassion = <section className={'l-homepage__o-passions'}>
        <CardListText
            details={[
                'Philosophy',
                'Dark Fantasy',
                'Sociology',
                'Fantasy',
                'Science Fiction',
            ]}
            title={'Reading'}
            media={
                'https://bestanimations.com/media/books/999470521finger-passes-along-book-spines-library-animated-gif.gif'
            }
            classname={'l-homepage__o-passions--card'}
            aosEffect={"fade-up"}
            aosDuration={1000}
        />
        <CardListText
            details={['History', 'Archeology', 'Health', 'Technology']}
            title={'Sciences'}
            media={'https://media.giphy.com/media/7VzgMsB6FLCilwS30v/giphy.gif'}
            classname={'l-homepage__o-passions--card'}
            aosEffect={"fade-up"}
            aosDuration={1000}
        />
        <CardListText
            details={['Drawing', 'Architecture', 'Fashion', 'Animation', 'Design']}
            title={'Arts'}
            media={
                'http://33.media.tumblr.com/0ffebed62366b224c7173c977257f229/tumblr_nmn9lkyHjK1u4two5o1_1280.gif'
            }
            classname={'l-homepage__o-passions--card'}
            aosEffect={"fade-up"}
            aosDuration={1000}
        />
        <CardListText
            details={[
                'Website',
                'Mobile application',
                'Video game',
                'Concept',
                'Realism',
            ]}
            title={'Coding'}
            media={'https://media.giphy.com/media/AOSwwqVjNZlDO/giphy.gif'}
            classname={'l-homepage__o-passions--card'}
            aosEffect={"fade-up"}
            aosDuration={1000}
        />
    </section>
    return (
        <>
            {/* Initialize Effect */}
            <Head>
                <title>Manon Salsou - Jouskaio's portfolio 2022</title>
                <meta name="description" content="Generated by create next app" />
                <meta
                    name="viewport"
                    content="user-scalable=no, width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ApolloProvider client={client}>
                <div className={'l-main__o-global l-homepage'}>
                    <section className={'l-homepage__o-main'}>
                        <TextH1 classname={'l-homepage__o-mainTitle'}>Manon Salsou</TextH1>
                        {statusAOS && (
                            <CardXL
                                media={'https://vod.api.video/vod/vi7JsiT7ga1SbBdR8QeUAZLX/mp4/source.mp4'}
                                aosDuration={1000}
                                aosEffect={"fade-up"}
                            />
                        )}
                        {statusAOS && size.width >= 768 && (
                                fragmentPassion
                            )
                        }
                    </section>
                    <section className={'l-homepage__o-profile'}>
                        {statusAOS && (
                            <>
                                <CardStatus
                                    title={'Mobile / Web developer and IoT software engineer'}
                                    text={'Currently developing AR and VR applications at home'}
                                    color={'#656DB6'}
                                    classname={'l-homepage__o-profile--status'}
                                    aosDuration={1000}
                                    aosEffect={size.width <= 768 ? "fade-up" : "fade-left"}
                                />
                                <CardListIcons
                                    classname={'l-homepage__o-profile--skill'}
                                    icons={[
                                        {
                                            icon: '/icons/languages/symfony.svg',
                                            title: 'Symfony',
                                            text: 'PHP framework',
                                        },
                                        {
                                            icon: '/icons/languages/PHP.svg',
                                            title: 'PHP',
                                            text: 'Back-end',
                                        },
                                        {
                                            icon: '/icons/languages/linux.svg',
                                            title: 'Linux',
                                            text: 'Operating system',
                                        },
                                        {
                                            icon: '/icons/languages/docker.svg',
                                            title: 'Docker',
                                            text: 'Virtualization of process',
                                        },
                                        {
                                            icon: '/icons/languages/bash.svg',
                                            title: 'Bash',
                                            text: 'Task autonomization',
                                        },
                                        {
                                            icon: '/icons/languages/sql.png',
                                            title: 'SQL / NoSQL',
                                            text: 'Database',
                                        },
                                        {
                                            icon: '/icons/languages/wordpress.svg',
                                            title: 'Wordpress',
                                            text: 'CMS website',
                                        },
                                        {
                                            icon: '/icons/languages/java.svg',
                                            title: 'Java',
                                            text: 'Back-end | Android application',
                                        },
                                        {
                                            icon: '/icons/languages/html.svg',
                                            title: 'HTML 5',
                                            text: 'Website from scratch',
                                        },
                                        {
                                            icon: '/icons/languages/sass.svg',
                                            title: 'SCSS',
                                            text: 'Website from scratch',
                                        },
                                        {
                                            icon: '/icons/languages/javascript.svg',
                                            title: 'JavaScript',
                                            text: 'Website from scratch',
                                        },
                                        {
                                            icon: '/icons/languages/react.svg',
                                            title: 'React.JS',
                                            text: 'Front-end website',
                                        },
                                        {
                                            icon: '/icons/languages/nextjs.svg',
                                            title: 'NextJS',
                                            text: 'Front-end website',
                                        },
                                        {
                                            icon: '/icons/languages/jquery.svg',
                                            title: 'JQuery',
                                            text: 'Front-end website',
                                        },
                                        {
                                            icon: '/icons/languages/after-effect.svg',
                                            title: 'Motion',
                                            text: 'Animation',
                                        },
                                        {
                                            icon: '/icons/languages/blender.svg',
                                            title: '3D / Animation',
                                            text: 'Animation',
                                        },
                                        {
                                            icon: '/icons/languages/figma.svg',
                                            title: 'Wireframe & Prototyping',
                                            text: 'UX / UI',
                                        },
                                        {
                                            icon: '/icons/languages/iot.svg',
                                            title: 'On-board Electronic \n SDK robotic \n C++',
                                            text: 'IoT',
                                        },
                                        {

                                            icon: '/icons/languages/kotlin.svg',
                                            title: 'Kotlin',
                                            text: 'Android mobile application',
                                        },
                                        {
                                            icon: '/icons/languages/swift.png',
                                            title: 'Swift',
                                            text: 'IOS mobile application',
                                        },
                                        {
                                            icon: '/icons/languages/arkit.svg',
                                            title: 'ARKit',
                                            text: 'IOS Reality Augmented (AR)',
                                        },
                                    ]}
                                    aosDuration={1000}
                                    aosEffect={size.width <= 768 ? "fade-up" : "fade-left"}
                                />
                            </>
                        )}
                    </section>
                    <section className={'l-homepage__o-infos'}>
                        {statusAOS && (
                            <CardInfos
                                date={'2023-08-01T00:00:00'}
                                aosDuration={1000}
                                aosEffect={size.width <= 768 ? "fade-up" : "fade-left"}
                            >
                                “ I recently created my blog, the first article will arrive soon.
                                You can subscribe to the newsletter to be aware of its posting “
                            </CardInfos>
                        )}
                    </section>
                    <section className={'l-homepage__o-latestArticles'}>
                        {/*TODO : Changer to API REST Wordpress*/}
                        <Query query={LATEST_ARTICLES_QUERY} value={3}>
                            {({ data: { articles } }) => {
                                let articlesData = [];
                                articles.data.map((article, i) => {
                                    let tags = [];
                                    article.attributes.tags.data.map((tag, i) => {
                                        tags.push({
                                            name: tag.attributes.name,
                                            color: tag.attributes.color,
                                            slug: tag.attributes.slug,
                                        });
                                    });
                                    article.attributes.categories.data.map((tag, i) => {
                                        tags.push({
                                            name: tag.attributes.name,
                                            color: tag.attributes.color,
                                            slug: tag.attributes.slug,
                                        });
                                    });
                                    articlesData.push({
                                        title: article.attributes.title,
                                        text: article.attributes.description,
                                        media: getStrapiMedia(article.attributes.image),
                                        url: article.attributes.slug,
                                        tags: tags,
                                        classname: undefined,
                                    });
                                });
                                return (
                                    <CardNews
                                        article={articlesData}
                                        classname={'l-homepage__o-latestArticles--news'}
                                        aosDuration={1000}
                                        aosEffect={size.width <= 768 ? "fade-up" : "fade-left"}
                                    />
                                );
                            }}
                        </Query>
                    </section>
                    {statusAOS && size.width < 768 && (
                        <>
                            <TextH5 classname={'l-homepage__a-titlePassion'} aosDuration={1300} aosEffect={size.width <= 768 ? "fade-up" : "fade-left"}>Passions</TextH5>
                            {fragmentPassion}
                        </>
                    )}
                    <section className={'l-homepage__o-contact'}>
                        {statusAOS && size.width  && (
                        <WidgetContact
                            contacts={[
                                {
                                    name: 'Email',
                                    url: 'mailto:jouskaio.me@gmail.com',
                                    description: "jouskaio.me@gmail.com"
                                },
                                {
                                    name: 'Twitter',
                                    url: 'https://twitter.com/Jouskaio_',
                                    description: "@Jouskaio_"
                                },
                                {
                                    name: 'Linkedin',
                                    url: 'https://www.linkedin.com/in/manonsalsou/',
                                    description: "@manonsalsou"
                                }
                            ]
                        }
                            aosDuration={1000}
                            aosEffect={size.width <= 768 ? "fade-up" : "fade-left"}
                        >Contact me.</WidgetContact>
                        )}
                    </section>
                </div>
            </ApolloProvider>
        </>
    );
}
