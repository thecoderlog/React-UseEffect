# Versions

Each file here is one step of the story. The video's code panels read these files, and
`../../capture.mjs` copies each one into place (`src/Counter.jsx`, `src/Timer.jsx`, `src/main.jsx`)
before capturing, the way you'd edit and save the real file. Edit a version here, then re-run the capture.

| File | Copied to | Shown in beats |
|---|---|---|
| `Counter.v1.jsx` | `src/Counter.jsx` | hook.*, when.*, deps.none/every/watch: effect with no array |
| `Counter.v2.jsx` | `src/Counter.jsx` | deps.empty/once/click: `[]` |
| `Counter.v3.jsx` | `src/Counter.jsx` | deps.values/title/tab: `[count]` + `document.title` |
| `Counter.stale.jsx` | `src/Counter.jsx` | deps.stale/lint: reads `count`, array left empty |
| `Timer.v1.jsx` | `src/Timer.jsx` | cleanup.timer/problem/skip: no cleanup |
| `Timer.v2.jsx` | `src/Timer.jsx` | cleanup.fix/one: `return () => clearInterval(id)` |
| `main.strict.jsx` | `src/main.jsx` | cleanup.strict/back: `<StrictMode>` |
| `main.nostrict.jsx` | `src/main.jsx` | cleanup.remove: StrictMode removed |

`capture.mjs` also builds the app for production (`vite build` + `vite preview`, Counter v1, StrictMode still on) to record
the production console for the Short's last line: one `effect ran`.
