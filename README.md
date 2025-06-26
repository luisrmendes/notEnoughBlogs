# notEnoughBlogs

### Build
```
npx eleventy --serve
```

### Setup static page with tailwind and 11ty

```bash
npm install tailwindcss @tailwindcss/cli
```

src/input.css
```css
@import "tailwindcss";
```

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```