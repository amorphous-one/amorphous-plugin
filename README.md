# Amorphous

Make and reshape abstracts on [Amorphous](https://amorphous.one) with your own agent.

This plugin adds the Amorphous skill and connects the remote MCP server at `https://amorphous.one/mcp`. The first time your agent uses it, you sign in to Amorphous in your browser and approve the connection. You can disconnect it at any time in Amorphous Settings.

## Install

Claude Code:

```bash
claude plugin marketplace add amorphous-one/amorphous-plugin
claude plugin install amorphous@amorphous
```

Any coding agent (installs the skill and connects the MCP server for Claude Code, Codex, Gemini CLI and Cursor):

```bash
npx --yes amorphous-cli@latest setup
```

Chat apps: add `https://amorphous.one/mcp` as a custom connector.
