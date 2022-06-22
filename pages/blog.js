import NavCategories from '/components/blog/Navigation/categories'
import {ApolloProvider} from "@apollo/react-hooks";
import {client} from "/lib/blog/apolloClient";
import React from "react";
import Query from "../lib/blog/api";
import ARTICLES_QUERY from "../lib/blog/article/articles";
import Article from "../components/blog/Article/list-article";

// <AllArticles/>
export default class Blog extends React.Component {
  render() {
    if(!client) {
      return <p>Loading</p>
    }
    return (
      <ApolloProvider client={client}>
        <NavCategories/>
        <div>
          <Query query={ARTICLES_QUERY}>
            {({data: {articles}}) => {
              return <Article articles={articles.data}/>;
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

