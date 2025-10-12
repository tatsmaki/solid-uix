# Setup fonts

SolidUIX uses [Inter](https://rsms.me/inter) font by default.
Add it to your project via Fontsource, or with the Google Fonts CDN.

## Fontsource

Run the following command to add Inter through Fontsource to your project:

```sh
npm install @fontsource/inter
```

Then you can import it in your entry point like this:

```ts
import "@fontsource/inter";
```

## Google Web Fonts

To install Inter through the Google Web Fonts CDN, add the following code inside your project **`<head />`** tag:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

## Root Font

Apply the root font in your CSS entry point:

```css
:root {
  font-family: Inter;
}
```
