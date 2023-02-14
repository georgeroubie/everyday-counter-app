import { screen } from '@testing-library/react';
import Info from '.';
import { render } from '../../components/test/test-utils';

describe('<Info />', () => {
  test('Should render the title', () => {
    // ARRANGE
    render(<Info />);
    const titleElement = screen.getByText('Info');

    // ACT

    // ASSERT
    expect(titleElement).toBeInTheDocument();
  });
});
