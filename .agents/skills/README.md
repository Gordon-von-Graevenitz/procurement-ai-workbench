# Repository skills

This directory is for workflows that are specific to Procurement AI Workbench
and useful across multiple tasks.

## Create a skill

1. Copy `_template` to a kebab-case directory such as
   `code-change-verification`.
2. Rename `SKILL.example.md` to `SKILL.md`.
3. Replace the placeholder front matter and instructions.
4. Keep only the optional `scripts/`, `references/`, and `assets/` directories
   the skill actually needs.
5. Test the skill with a request that should trigger it and one that should not.

The expected structure is:

```text
.agents/skills/
└── my-skill/
    ├── SKILL.md
    ├── scripts/       # Optional deterministic helpers
    ├── references/    # Optional detailed guidance
    └── assets/        # Optional templates or static inputs
```

Codex initially uses a skill's `name` and `description` for discovery. Write a
specific description that includes the trigger conditions; load detailed
instructions and resources only when the workflow needs them.
