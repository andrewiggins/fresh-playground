/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

// Turn off dev time features (e.g. auto-refresh)
Deno.env.set("DENO_DEPLOYMENT_ID", "");

await start(manifest);
