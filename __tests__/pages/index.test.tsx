import renderer from 'react-test-renderer';
import Home from 'src/pages/home';

describe('Index page', () => {
  it('should match the snapshot', () => {
    // const launch = {
    //   timestamp: 1605401340000,
    //   mission: 'Mission Name',
    //   site: 'Kennedy Space Center',
    //   rocket: 'Falcon 9'
    // };
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
