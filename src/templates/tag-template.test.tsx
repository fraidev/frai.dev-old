import React from 'react';
import renderer from 'react-test-renderer';
import { allMarkdownRemark } from '../../jest/__fixtures__/all-markdown-remark';
import { pageContext } from '../../jest/__fixtures__/page-context';
import TagTemplate from './tag-template';
import { RenderCallback } from '../types';
import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from '../../jest/__fixtures__/site-metadata';

describe('TagTemplate', () => {
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
    const tree = renderer.create(<TagTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
