// pages/api/get-github-contributions.js
export default async function handler(req, res) {
  const username = "vedant14";
  const token = process.env.GITHUB_TOKEN; // optional, falls back to public data

  // Use GitHub GraphQL API for contribution data
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const headers = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `bearer ${token}`;
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const calendar = data.data.user.contributionsCollection.contributionCalendar;
    
    // Flatten weeks into array of { date, count }
    const contributions = calendar.weeks.flatMap(week =>
      week.contributionDays.map(day => ({
        date: day.date,
        count: day.contributionCount,
      }))
    );

    res.status(200).json({
      total: calendar.totalContributions,
      contributions,
    });
  } catch (error) {
    // Fallback: return empty data so page doesn't break
    console.error("GitHub API error:", error.message);
    res.status(200).json({ total: 0, contributions: [] });
  }
}
