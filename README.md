# use-provided-context

Hook for accessing context while enforcing that the context was provided.

## Features

1. List features here

## Installation

1. `yarn add @adamldoyle/use-provided-context`

## Examples

- (INSERT STORYBOOK URL HERE)

OR

- `yarn storybook`

OR

```
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
```

## Development

1. `yarn install`
2. `yarn build`

## Contributors

[Adam Doyle](https://github.com/adamldoyle)

## License

MIT
