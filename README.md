# Solid UIX

<p align="center">
  <a href="https://solid-uix.vercel.app">Storybook</a> 
</p>

### Install

```sh
npm install solid-uix
```

### Default font

Solid UIX uses the Inter font by default. See [Setup — Fonts](/docs/setup_fonts.md) for complete details.

### Quick start

Import components and styles.

```jsx
import { Button, TextInput, Checkbox, Field } from "solid-uix";
import "solid-uix/css";

const Example = () => {
  return (
    <form>
      <Field>
        <Field.Label>Email</Field.Label>
        <TextInput name="email" />
      </Field>

      <Checkbox name="consent" label="I agree" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
```

### Server Side Rendering

Resolve styles as URL and append metadata element to document head.
Stylesheet will be preloaded.
See @solidjs/meta [Link](https://docs.solidjs.com/solid-meta/reference/meta/link)

```jsx
import styles from "solid-uix/css?url";

<head>
  <link rel="stylesheet" href={style} />
</head>;
```
