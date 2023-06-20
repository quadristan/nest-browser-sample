# nest-browser-sample

Sample experiments about using NestJs in a web environment:
- Does it work outside NodeJS?
- How big is the bundle?

# How to run the experiment yourself?

The preferred way is to use `pnpm` ( install it with `npm install -g pnpm`) but it should work with `yarn`

```bash
pnpm i
pnpm build
```

Then you can look browse `build/index.html`

# How to analyze bundle content

```bash
pnpm i
pnpm analyze
```

# Results

| Bundle             | Size   |
| ------------------ | ------ |
| `vendor-nestjs.js` | 184 Ko |
| `vendor-others.js` | 624 Ko |
