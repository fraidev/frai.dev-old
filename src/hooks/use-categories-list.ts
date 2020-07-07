import { useStaticQuery, graphql } from 'gatsby';

const useCategoriesList = () => {
  const query = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return query?.allMarkdownRemark?.group;
};

export default useCategoriesList;
