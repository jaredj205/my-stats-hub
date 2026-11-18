import { getStats as github } from "./connectors/github.js";

export default async function handler(req, res) {
  const results = await Promise.allSettled([github()]);

  const stats = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value);

  res.status(200).json(stats);
}