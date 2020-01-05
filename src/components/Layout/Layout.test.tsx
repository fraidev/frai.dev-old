// @flow strict
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import { siteMetadata } from '../../../jest/__fixtures__/site-metadata';
import Layout from './Layout';
import { RenderCallback } from '../../types';

describe('Layout', () => {
  const props = {
    ...siteMetadata,
    children: 'test',
    description: 'test',
    title: 'test'
  };

  beforeEach(() => {
    let staticQueryMock = StaticQuery as jest.Mock
    let useStaticQueryMock = useStaticQuery as jest.Mock

    staticQueryMock.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(props)
      ),
      //TODO ver isso aqui
      // useStaticQueryMock.mockReturnValue(props)
    );

  });

  it('renders correctly', () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
