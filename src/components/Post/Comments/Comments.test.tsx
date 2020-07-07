
import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './Comments';
import { StaticQuery, useStaticQuery } from 'gatsby';
import { RenderCallback } from '../../../types';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';

describe('Comments', () => {
  beforeEach(() => {
    (StaticQuery as any).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render({ ...siteMetadata })
      ),
      (useStaticQuery as jest.Mock).mockReturnValue({ ...siteMetadata })
    );
  });

  const props = {
    postTitle: 'test',
    postSlug: '/test'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Comments {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
