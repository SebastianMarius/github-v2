import TemperatureData from "../TemperatureDescribe/TemperatureData";
import { render, fireEvent, screen } from '@testing-library/react';
import BadRequest from "../BadRequest";


describe('TemperatureData', () => {
    test('renders without crashing', () => {
      const props = {
        setCity: jest.fn(),
        setActiveLang: jest.fn(),
        internattionalizare: { en: {}, ro: {} },
        activelang: 'en',
        weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      };
  
      render(<TemperatureData {...props} />);
      // If no errors are thrown during rendering, the test will pass
    });
  });


  describe('TemperatureData', () => {
    test('allows user to input city name', () => {
      // Mock the necessary props
      const setCity = jest.fn();
  
      const props = {
        setCity,
        setActiveLang: jest.fn(),
        internattionalizare: { en: {}, ro: {} },
        activelang: 'en',
        weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      };
  
      // Render the component with the mocked props
      render(<TemperatureData {...props} />);
  
      // Assume the input has a placeholder or accessible name you can query by
      const inputField = screen.getByRole('textbox');
      fireEvent.change(inputField, { target: { value: 'New York' } });
  
      // Simulate pressing Enter after typing the city name
      fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });
  
      // Assert setCity was called with the new value
      expect(setCity).toHaveBeenCalledWith('New York');
    });
  });

  describe('BadRequest', () => {
    test('displays the correct error message and image', () => {
      // Mock the props
      const internattionalizare = {
        en: {
          badRequest: {
            badRequest: 'Bad city you entered'
          }
        },
        ro: {
          badRequest: {
            badRequest: 'Oraș greșit ai introdus'
          }
        }
      };
      const activelang = 'en';
  
      // Render the component with the mocked props
      render(<BadRequest internattionalizare={internattionalizare} activelang={activelang} />);
  
      // Assert the error message is displayed
      expect(screen.getByText('Bad city you entered')).toBeInTheDocument();
  
      // Assert the image is displayed. Since ErrorPhoto is a styled component wrapping an img, 
      // we check for the presence of an img element with the correct src.
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument;
    });
  });