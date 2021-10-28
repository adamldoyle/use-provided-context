import { Context, useContext } from 'react';

/**
 * Provides context similar to useContext hook, but verifies that the context is provided (i.e. not undefined/null).
 * @param desiredContext Context to load
 * @returns Context data
 */
export function useProvidedContext<IContextOutput>(desiredContext: Context<IContextOutput | undefined>): IContextOutput {
  const context = useContext(desiredContext);

  if (!context) {
    throw new Error(`${desiredContext.displayName ?? 'Unknown'} context was not provided`);
  }

  return context;
}
