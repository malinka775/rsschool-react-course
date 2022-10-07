import React from 'react';
import Searchbar from '../';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

class LocalStorageMock {
  store: Record<string, string> = { searchValue: 'test' };

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = value.toString();
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}
Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock(),
});

test('getting data to localStorage', () => {
  const { getByTestId } = render(<Searchbar onChange={() => null} />);

  const inputEl = getByTestId('searchInput') as HTMLInputElement;

  expect(inputEl.value).toContain('test');
});

test('setting data to localStorage', () => {
  const { getByTestId, unmount } = render(<Searchbar onChange={() => null} />);

  const inputEl = getByTestId('searchInput') as HTMLInputElement;

  fireEvent.change(inputEl, {
    target: {
      value: 'testValue',
    },
  });

  unmount();

  expect(localStorage.getItem('searchValue')).toEqual('testValue');
});
