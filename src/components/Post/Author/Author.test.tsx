
import React from 'react';
import renderer from 'react-test-renderer';
import Author from './Author';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../../../types';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../../../jest/__fixtures__/all-markdown-remark';

describe('Author', () => {
  const props = {
    ...siteMetadata,
    ...allMarkdownRemark
  };
  beforeEach(() => {
    (StaticQuery as any).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(props)
      ),
      (useStaticQuery as jest.Mock).mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Author />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
