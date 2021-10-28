import { createContext, FC } from 'react';
import { Meta } from '@storybook/react';
import { useProvidedContext } from './useProvidedContext';

interface IStoryContext {
  value: string;
}

const StoryContext = createContext<IStoryContext | undefined>(undefined);
StoryContext.displayName = 'StoryContext';

const StoryComponent: FC = () => {
  // StoryContext is guaranteed to provide IStoryContext in a typesafe way, an undefined context will throw an error
  const { value } = useProvidedContext(StoryContext);

  return <>Value from context: {value}</>;
};

export default {
  title: 'useProvidedContext',
  argTypes: {},
} as Meta;

export const NotProvided = () => <StoryComponent />;
export const Provided = () => (
  <StoryContext.Provider value={{ value: 'Sample context data' }}>
    <StoryComponent />
  </StoryContext.Provider>
);
