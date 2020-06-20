import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({adapter: new EnzymeAdapter() });

const mockStore = configureMockStore();
const store = mockStore({});

it('renders without crashing', () => {
  expect(
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  ).toBeTruthy();
});
