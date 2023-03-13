// @ts-ignore
import Head from 'next/head'
// @ts-ignore
import Image from 'next/image'
import React, {useState} from 'react';
import Iframe from "../components/atom/media/iframe";
import {useWindowSize} from "../components/protons/tools/sizeWindow";
// @ts-ignore
import AOS from 'aos';
import TextH1 from "../components/atom/text/textH1";
import TextH4 from "../components/atom/text/textH4";
import Media from "../components/atom/media/media";
import Code from "../components/atom/code/code";
import Button from "../components/atom/button/button";
// @ts-ignore
import Link from "next/link";
import TextH5 from "../components/atom/text/textH5";
import TextH3 from "../components/atom/text/textH3";
import Swipe from "../components/molecule/navigation/swipe";
import TitleWithTags from "../components/molecule/quotes/title-with-tags";
import {client} from "../lib/blog/apolloClient";
// @ts-ignore
import {ApolloProvider} from "@apollo/client";
import Query from "../lib/blog/api";
import LATEST_ARTICLES_QUERY from "../lib/blog/article/latest-articles";
import Scroll from "../components/molecule/sliders/scroll/scroll";
import Footer from '../components/organisms/navigation/footer';
import PopCategoryXXS from "../components/molecule/media/popup-category-xxs";
import TextSpanXXXL from "../components/atom/text/textSpanXXXL";
import Header from "../components/organisms/navigation/header";
import Table from "../components/molecule/media/table";

{/*TODO: Animate background when in light mode*/}
export default function Home() {
    const [displayNewsletter, setNewsletter] = useState("false");

    const size = useWindowSize();
    //TODO: scroll and headerHidden not working
    //const scroll = setScrollingAOS();


    if(!client) {
        return <p>Loading</p>
    }
    const displayingNewsletter = () => {
        // @ts-ignore
        setNewsletter(!displayNewsletter);
    };

    const closingNewsletter = () => {
        // @ts-ignore
        setNewsletter("false");
    };


    return (
        <>
            {/* Initialize Effect */}
            {/*{scroll.scroll}*/}
            <Head>
                <title>Manon Salsou - Jouskaio's portfolio 2022</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <div className="l-background__lines hidden">
                    <div className="l-background__line"></div>
                    <div className="l-background__line"></div>
                    <div className="l-background__line"></div>
                </div>

                <ApolloProvider client={client}>
                    <main className={"l-home__m-main"}>
                    <Header/>
                    <section className={"l-home__o-homepage"}>
                        <Iframe src={undefined} width={size.width} height={size.height} classname={"l-home__m-videoHome"} id={undefined} title={undefined}/>
                        <Swipe content={"Discover"} src={"icons/arrow.svg"} width={16} height={16} classname={"l-home__m-swipe"} alt={"Scroll down"}/>
                    </section>

                    <section className={"l-home__a-sizeSection l-home__o-profil"}>
                        <div>
                            <div>
                                <nav className={"l-home__a-logoProfile"}><Media classname={""} src={"/icons/swift.svg"} width={116} height={"100%"} alt={"Logo"}/></nav>
                                <div className={"l-home__m-title"}>
                                    <TextH1 classname={"l-home__a-titleText"}>Hello ! I’m Manon Salsou</TextH1>
                                    <div className="l-home__a-division"></div>
                                    <TextH4>
                            <span className={"l-home__a-span"}>
                            Mobile</span> / <span className={"l-home__a-span"}>Web</span> developer and
                                        <span className={"l-home__a-span"}> IoT</span> software engineer
                                        <br/>Currently developing
                                        <span className={"l-home__a-span"}> AR</span> and <span className={"l-home__a-span"}>VR</span> applications at home
                                    </TextH4>
                                </div>
                                <nav className={"l-home__a-buttonProfileNav"}><Button classname={"l-home__a-buttonProfile"} src={"/about"}>More about it</Button></nav>

                            </div>
                            <div>
                                <Code language={"javascript"} classname={"l-home__a-code"}>
                                    {`
const jouskaio = {
    pronouns: "She" | "Her",
    formation: ["Digital Project Manager Bachelor", "Degree in computer engineering - 3iL"],
    askMeAbout: ["web dev", "tech", "app dev", "ios", "AR", "VR"],
    skills: {
        websiteAndMobile: {
        backEnd: ["PHP", "Symfony", "Docker", "Bash", "Wordpress", "Node.js", "Java"],
        frontEnd: ["HTML", "CSS", "Javacript", "Angular", "React", "Angular", "jQuery" ],
        mobileApp: ["ARKit", "Swift", "Kotlin"],
        devOps: ["AWS", "Docker🐳", "Nginx"],
        databases: ["mongo", "MySql", "sqlite", "postgreSQL"]
    },
    InteractiveDesign : {
        uxUi : ["Suite Adobe", "Design Thinking", "UX research techniques",
        "Benchmark", "Personae", "Experience Map", "Wireframe",
        "Prototype"],
        animation : ["Motion", "3D"]
    },
    trafficAmelioration: {
        traffic: ["Web Marketing", "E-Business", "Data Intelligence",
        "Semantic", "Traffic Management", "SEO", "ASO", "SEA",
        "CRM", "Social media"],
        createContent: ["Content Marketing", "Brand Content", "Media Content"]
    },
    specialities : ["Embedded systems", "management", "Agility and Scrum", "TOEIC"]
    },
    compagniesWorkedWith: ["Orange", "RATP", "Novæ Memoræ", "Santarelli"],
    funFact: ["My name is contraction of Jouska and I/O.
    Jouska means 'A hypothetical conversation that you compulsively play out in your head' which is usually the
    behavior I always have when reflecting about a future decision"]
};
`}
                                </Code>
                            </div>
                        </div>
                    </section>

                    <section className={"l-home__a-sizeSection l-home__o-news"}>
                        <div className={"l-home__m-containerInfo"}>
                            <TextH5>New Update 07/03/2022</TextH5>
                            <div className="l-home__a-division l-home__a-divisionInfo"></div>
                            <TextH3 classname={"l-home-__a-infoText"}>“ I recently create my blog, the first article will arrived soon. You can subscribe to the newsletter to be aware of its posting “</TextH3>
                            <nav className={"l-home__a-buttonProfileNav"}><button className={"a-button l-home__a-buttonProfile l-home__a-buttonNews"} onClick={displayingNewsletter}>Subscribe to the newsletter</button></nav>
                            <div className={`l-home__o-newsletter  ${displayNewsletter ? "hidden" : ""}`}>
                                <span className={`l-home__o-newsletterClose`} onClick={closingNewsletter}><TextH5>Close</TextH5></span>
                                <script async data-uid="cb13d0812e" src="https://jouskaio-me.ck.page/cb13d0812e/index.js"></script>
                            </div>
                        </div>
                        <Query query={LATEST_ARTICLES_QUERY} value={7}>
                            {({ data: { articles } }) => {
                                if (articles.data.length) {
                                    return (
                                        <div className={"l-home__m-containerNews"}>
                                            <span className={"l-home__title"}><TextH3>Latest News</TextH3></span>
                                            <div className={"l-home__m-containerArticles"}>
                                                {articles.data.map(function (article, i) {
                                                let tags = []
                                                //TODO: Create a tag pages
                                                article.attributes.tags.data.map(function (tag, i) {
                                                    tags.push({name : tag.attributes.name, color: tag.attributes.color, classname:"", link: "/blog/category/"+tag.attributes.slug})
                                                })
                                                article.attributes.categories.data.map(function (categorie, i) {
                                                    tags.push({name : categorie.attributes.name, color: categorie.attributes.color, classname:"", link: "/blog/category/"+categorie.attributes.slug})
                                                })
                                                return (
                                                    <nav key={i}><TitleWithTags key={i} titleName={article.attributes.title}
                                                                        titleClassname={"m-titleWithTag__title"} libelled={article.attributes.language} tags={tags} itemClassname={"l-home__a-newsArticle"} linkTitle={"/blog"}/></nav>
                                                )
                                            })}
                                            </div>
                                        </div>
                                        )
                                }
                            }
                            }
                        </Query>
                        <nav className={"l-home__a-buttonNewsNav"}>
                            <Button classname={"l-home__a-buttonNews"} src={"/blog"}>Go to the blog</Button>
                            <Button classname={"l-home__a-buttonNews"} src={"/projects"}>View projects</Button>
                        </nav>
                    </section>
                    <section className={"l-home__a-sizeSection l-home__o-projects"}>
                        {/*TODO: Add projects on it*/}
                        <span className={"l-home__title"}><TextH3>Projects</TextH3></span>
                        <Table items={undefined}/>
                    </section>
                    <section className={"l-home__a-sizeSection l-home__o-passions"}>
                        <span className={"l-home__title"}><TextH3>Passions</TextH3></span>
                        <div className={"l-home__o-passions__containerMedia"}>
                            <PopCategoryXXS details={["Philosophy", "Sociology", "Dark Fantasy", "Fantasy", "Science Fiction"]} title={"Reading"} number={"01"} subtitle={"To learn new things"} media={"https://bestanimations.com/media/books/999470521finger-passes-along-book-spines-library-animated-gif.gif"}/>
                            <PopCategoryXXS details={["History", "Archeology", "Health", "Technology"]} title={"Sciences"} number={"02"} subtitle={"Be aware of latest innovation"} media={"https://media.giphy.com/media/7VzgMsB6FLCilwS30v/giphy.gif"}/>
                            <PopCategoryXXS details={["Jazz", "Pop", "Classical", "Soundtrack", "Rock", "Hip-Hop", "Electro"]} title={"Music"} number={"03"} subtitle={"While working or chilling"} media={"https://media.giphy.com/media/XbJYBCi69nyVOffLIU/giphy.gif"}/>
                            <PopCategoryXXS details={["Architectural", "Cartoon", "Line Art", "Animation", "Realism", "Abstract"]} title={"Drawing"} number={"04"} subtitle={"Represent my mind"} media={"http://33.media.tumblr.com/0ffebed62366b224c7173c977257f229/tumblr_nmn9lkyHjK1u4two5o1_1280.gif"}/>
                            <PopCategoryXXS details={["Website", "Mobile application", "Video game", "Concept", "Realism"]} title={"Coding"} number={"05"} subtitle={"Reflect and develop"} media={"https://media.giphy.com/media/AOSwwqVjNZlDO/giphy.gif"}/>
                            <PopCategoryXXS details={["Room", "Landscape", "Object", "Motion"]} title={"3D"} number={"06"} subtitle={"Create a new universe"} media={"https://media.giphy.com/media/DS89v1NqpzCqA/giphy.gif"}/>
                        </div>
                    </section>
                    <section className={"l-home__a-sizeSection l-home__o-contact"}>
                        <span>
                            Send me an <a href="mailto:jouskaio.me@gmail.com" className={"l-home__o-contact__link"}>email</a>
                        </span>
                    </section>
                    <Footer className={"l-home__footer"}>Made with ♥ by @Jouskaio - 2022</Footer>
                    </main>
                </ApolloProvider>
            </>
        </>

    )
}
