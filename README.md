# WaterCycle

**Learn Without Effort**

Water has no form. It takes the shape of whatever contains it. It never forces. It flows around obstacles. You are the same. WaterCycle finds your learning form — then teaches you to stop fighting it.

---

## What It Does

A learning styles discovery and protocol platform built on the VARK model (Fleming, 1987), adapted with Wu Wei philosophy — action without force.

### The Thinkier

Not a quiz. Twelve scenario-based moments that show you to yourself. Real situations. Real choices. Weighted scoring across four dimensions with multi-modal recognition — many people have two close styles.

Results stored in localStorage. Take it once, know forever.

### The Four Forms

| Style | Identity | Natural Medium |
|---|---|---|
| Visual | The Seer | Diagrams, maps, colour, spatial relationships |
| Auditory | The Listener | Lectures, discussion, reading aloud, rhythm |
| Reading/Writing | The Scribe | Books, notes, lists, definitions, research |
| Kinesthetic | The Doer | Hands-on, real examples, building, experiments |

### Learning Protocols

Each style gets a full learning protocol: how to study, how to take notes, how to retain, how to use it in practice. No generic advice. Style-specific tactics.

---

## Phase Status

| Phase | Status |
|---|---|
| Phase 1 — The Four Forms | Built. VARK Thinkier, 4-style protocols, localStorage. |
| Phase 2 — Blood Typing & Biomarkers | Concept. Additional biological dimension. |
| Phase 3 — Full Integration | Concept. Combined protocol engine. |

---

## Stack

- Node.js + Express (static file server)
- Vanilla JavaScript — no framework, no build step
- localStorage for user data — no database required
- Deployed on Railway

---

## Deploy

```bash
npm install
node server.js
```

Railway reads the Procfile and runs `node server.js`. No environment variables required.

---

Built by [The Code Cauldron](https://github.com/The-Code-Cauldron)
