import React from 'react';
import renderer from 'react-test-renderer';
import Sidebar from './Sidebar';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../../types';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../../jest/__fixtures__/all-markdown-remark';

describe('Sidebar', () => {
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
    isIndex: true
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
