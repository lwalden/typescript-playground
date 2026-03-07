# TypeScript Playground

A local TypeScript scratch environment. No build step, instant feedback, full IntelliSense.

## Quick start

```
# Open in VS Code
code d:\Source\typescript-playground

# Create a new file
npm run new -- my-problem        # creates src/my-problem.ts

# Run any file — open it, then:
Ctrl+Shift+B                     # runs current file via tsx (console output)
F5                               # same, but with debugger attached

# Browser output (with hot reload)
npm run browser                  # opens http://localhost:5173, edit browser/main.ts
```

## Keyboard shortcuts

| Key | Action |
|---|---|
| `Ctrl+Shift+B` | Run current `.ts` file (console) |
| `F5` | Debug current file (breakpoints work) |
| `Ctrl+Shift+A` | Toggle Copilot inline completions on/off |
| `Ctrl+Shift+P` → "Run Task" → "New playground file" | Create new file with prompt |

## Structure

```
src/
  scratch.ts          ← default scratch file
  examples/
    two-sum.ts
    binary-search.ts
browser/
  main.ts             ← edit for browser output
  index.html          ← renders console.log() output in the page
scripts/
  new.mjs             ← file scaffolding script
```

## Notes

- **IntelliSense** is always on (popup completions, hover types, go-to-def).
- **Inline AI completions** (Copilot ghost text) are **off by default** in this workspace — good for interviews. Toggle with `Ctrl+Shift+A`.
- **Strict TypeScript** is enabled (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`). Errors show inline via ErrorLens.
- Browser mode uses Vite — edit `browser/main.ts`, the page hot-reloads. `console.log()` output renders in the page as well as the browser console.
