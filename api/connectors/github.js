export async function getStats() {
  const username = process.env.GITHUB_USERNAME || "YOURUSERNAME";
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error(`GitHub error: ${res.status}`);
  const data = await res.json();

  return [
    { source: "github", metric: "Public repos", value: data.public_repos },
    { source: "github", metric: "Followers", value: data.followers },
    { source: "github", metric: "Following", value: data.following },
  ];
}