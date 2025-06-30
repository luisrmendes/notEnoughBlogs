# notEnoughBlogs

## First Setup
```
npm i
```

## Build

Build Tailwind output.css

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/assets/output.css --watch
```

Build static page

```
npm run build
```

## Run

Serve page

```
npx eleventy --serve
```

## First setup static page with tailwind and 11ty

```bash
npm install tailwindcss @tailwindcss/cli
```

src/input.css

```css
@import "tailwindcss";
```

```
npx @tailwindcss/cli -i ./input.css -o ./assets/output.css --watch
```
