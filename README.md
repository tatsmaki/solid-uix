# Solid UIX

<p align="center">
  <a href="https://solid-uix.vercel.app">Storybook</a> 
</p>

### Install

```sh
npm install solid-uix
```

### Quick start

```js
import { Button, TextInput, Checkbox, Field } from "solid-uix";
import "solid-uix/dist/main.css";

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
