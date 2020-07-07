
import React from 'react';
import renderer from 'react-test-renderer';
import PageTemplate from './page-template';
import { markdownRemark } from '../../jest/__fixtures__/markdown-remark';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../types';
import siteMetadata from '../../jest/__fixtures__/site-metadata';

describe('PageTemplate', () => {
  const props = {
    data: {
      markdownRemark
    }
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
    const tree = renderer.create(<PageTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
