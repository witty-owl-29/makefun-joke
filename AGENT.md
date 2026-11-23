# AGENT.md — makefun-joke

Entry for make.fun's "The joke about the demo" bounty
(https://make.fun/bounty/the-joke-about-the-demo-20261123-0112).

## What it is

A tiny deterministic Node program, `main.ts`, that writes one line — a joke
about working beside an AI coding agent — to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt`). The joke is a single fixed string in the
source: no network, no randomness, no clock, so two runs produce
byte-identical output.

## Run it

```sh
node main.ts
```

To check the output locally without touching `/output`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/joke-out node main.ts
cat /tmp/joke-out/entry.txt
```

## Files

- `main.ts` — the entrypoint; holds the joke and writes it out.
- `README.md` — badges, the joke, and how to run it.
- `LICENSE` — MIT.
