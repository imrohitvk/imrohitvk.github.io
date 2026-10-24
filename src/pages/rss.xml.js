import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.date - a.data.date);
  return rss({
    title: "Rohit Sharma · Blog",
    description: "Notes and updates on research, projects and teaching.",
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, description: p.data.description, link: `/blog/${p.id}/` })),
  });
}
