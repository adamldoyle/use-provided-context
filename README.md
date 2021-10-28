# use-provided-context

Hook for accessing context while enforcing that the context was provided.

## Features

1. Allows providing an undefined default value for context but requiring context is defined when you go to use it (by being provided from a Provider)
2. Typescript safe - the response type won't include undefined so you don't need to check for it
3. Throws an error when a context is used without being provided (to be handled by whatever error handling you have in place)

## Installation

1. `yarn add @adamldoyle/use-provided-context`

## Examples

- https://adamldoyle-use-provided-context.netlify.app

OR

- `yarn storybook`

OR

```
interface IStoryContext {
  value: string;
}

// Context is initialized as undefined and only given a value via some defined provider
const StoryContext = createContext<IStoryContext | undefined>(undefined);
StoryContext.displayName = 'StoryContext';

const StoryComponent: FC = () => {
  // StoryContext is guaranteed to provide IStoryContext in a typesafe way, an undefined context will throw an error
  const { value } = useProvidedContext(StoryContext);

  return <>Value from context: {value}</>;
};
```

## Development

1. `yarn install`
2. `yarn build`

## Contributors

[Adam Doyle](https://github.com/adamldoyle)

## License

MIT
