// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders Miliikody link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Miliikody/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render } from '@testing-library/react';
import App from '../App';

test('App renders without crashing', () => {
  render(<App />);
});
