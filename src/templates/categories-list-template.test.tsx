import React from 'react';
import renderer from 'react-test-renderer';
import CategoriesListTemplate from './categories-list-template';
import { RenderCallback } from '../types';
import { StaticQuery, useStaticQuery } from 'gatsby';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';

describe('CategoriesListTemplate', () => {
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
    const tree = renderer.create(<CategoriesListTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
