import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundTemplate from './not-found-template';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../types';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';

describe('NotFoundTemplate', () => {
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

  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
