
import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../../jest/__fixtures__/all-markdown-remark';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../../types';

describe('Post', () => {
  const mockProps = {
    ...siteMetadata,
    ...allMarkdownRemark
  };

  beforeEach(() => {
    (StaticQuery as any).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(mockProps)
      ),
      (useStaticQuery as jest.Mock).mockReturnValue(mockProps)
    );
  });

  const props = {
    post: {
      id: 'test-123',
      html: '<p>test</p>',
      fields: {
        slug: '/test',
        categorySlug: '/test-category',
        tagSlugs: [
          '/test_0',
          '/test_1'
        ]
      },
      frontmatter: {
        date: '2016-09-01',
        tags: [
          'test_0',
          'test_1'
        ],
        title: 'test'
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
