import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import BlogPostLayout from "../components/blog-post/blog-post-layout";
import styles from "../../css/blog-post.module.scss";
import TwitterCard from "../components/blog/twitter-card";
import TableOfContents from "../components/blog-post/table-of-contents";
import PostSeries from "../components/blog-post/post-series";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { MDXProvider } from "@mdx-js/react";

/* eslint-disable-next-line  react/prop-types */
const BlogPost = ({ data, pageContext }) => {
  const post = data.mdx;
  const { image, caption } = post.frontmatter;
  const {
    src,
    srcWebp,
    presentationWidth,
    presentationHeight
  } = image.childImageSharp.fluid;
  let shortCodes = {
    TwitterTweetEmbed
  };
  return (
    <BlogPostLayout post={post} pageContext={pageContext}>
      <amp-img
        src={srcWebp}
        width={presentationWidth}
        height={presentationHeight / 2} // hack to fix the aspect ratio
        alt={caption}
        layout="responsive"
      >
        <div fallback>
          <amp-img
            src={src}
            width={presentationWidth}
            height={presentationHeight / 2} // hack to fix the aspect ratio
            alt={caption}
            layout="responsive"
          />
        </div>
      </amp-img>
      <PostSeries posts={pageContext.seriesPosts} currentPost={post} />

      <TableOfContents page={post} />
      <article className={styles.content}>
        <MDXProvider components={shortCodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </article>
      <TwitterCard amp />
    </BlogPostLayout>
  );
};

export default BlogPost;

// can use slug from context in gatsby-node as a variable in GraphQl
// $slug
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      id
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        datePublished
        dateModified
        series
        part
        image {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        excerpt
        FAQs {
          question
          answer
        }
        caption
      }
    }
  }
`;
