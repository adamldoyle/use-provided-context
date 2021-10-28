import { createContext, FC } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useProvidedContext } from './useProvidedContext';

interface TestOutput {
  value: string;
}

const TestContext = createContext<TestOutput | undefined>(undefined);

const TestContextProvider: FC<TestOutput> = ({ value, children }) => {
  return <TestContext.Provider value={{ value }}>{children}</TestContext.Provider>;
};

describe('useProvidedContext', () => {
  test('throws an error if the context is not provided', () => {
    TestContext.displayName = 'TestContext';
    const rendered = renderHook(() => useProvidedContext(TestContext), {
      wrapper: ({ children }) => {
        return <>{children}</>;
      },
    });
    expect(rendered.result.error?.message).toEqual('TestContext context was not provided');
  });

  test('throws an error with unknown name if displayName is undefined', () => {
    TestContext.displayName = undefined;
    const rendered = renderHook(() => useProvidedContext(TestContext), {
      wrapper: ({ children }) => {
        return <>{children}</>;
      },
    });
    expect(rendered.result.error?.message).toEqual('Unknown context was not provided');
  });

  test('returns context if provided', () => {
    // If this test used the useContext hook instead of the useProvidedContext hook, the last line of this test would
    // have a typescript issue. It would complain that rendered.result.current is potentially undefined, which
    // highlights the almost entire purpose of this hook.
    const rendered = renderHook(() => useProvidedContext(TestContext), {
      wrapper: ({ children }) => {
        return <TestContextProvider value="Test value">{children}</TestContextProvider>;
      },
    });
    expect(rendered.result.current.value).toEqual('Test value');
  });
});
