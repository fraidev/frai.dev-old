
import React from 'react';
import renderer from 'react-test-renderer';
import IndexTemplate from './index-template';
import { allMarkdownRemark } from '../../jest/__fixtures__/all-markdown-remark';
import { pageContext } from '../../jest/__fixtures__/page-context';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../types';
import siteMetadata from '../../jest/__fixtures__/site-metadata';

describe('IndexTemplate', () => {
  const props = {
    data: { allMarkdownRemark },
    pageContext
  };

  beforeEach(() => {
    (StaticQuery as any).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render({ ...siteMetadata })
      ),
      (useStaticQuery as jest.Mock).mockReturnValue({ ...siteMetadata })
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<IndexTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
