import React from "react"
import Layout from './Layout';
import renderer from 'react-test-renderer';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../../types';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';

describe('Layout', () => {
  const props = {
    ...siteMetadata,
    children: null,
    description: 'test',
    title: 'test',
    socialImage: ''
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
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
