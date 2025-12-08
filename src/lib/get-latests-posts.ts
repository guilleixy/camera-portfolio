import { getPageMap } from "nextra/page-map";
import { normalizePages } from "nextra/normalize-pages";

export async function getLatestPosts(limit = 10, baseRoute = "/blog") {
  const list = (await getPageMap(baseRoute)) ?? [];
  if (!Array.isArray(list) || list.length === 0) return [];

  let { directories } = normalizePages({ list, route: baseRoute });

  directories = directories.filter((post) => post.route != baseRoute);

  const allPosts = flattenPages(directories);

  const datedPosts = allPosts
    .filter((post) => post.frontMatter?.date)
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    );

  // If we have enough dated posts, return only the top ones
  if (datedPosts.length >= limit) {
    return datedPosts.slice(0, limit);
  }

  // Otherwise, fill in with undated posts
  const undatedPosts = allPosts.filter((post) => !post.frontMatter?.date);
  const remainingSlots = limit - datedPosts.length;
  const additionalPosts = undatedPosts.slice(0, remainingSlots);

  return [...datedPosts, ...additionalPosts];
}

function flattenPages(nodes) {
  const flat = [];
  for (const node of nodes) {
    if (node.children) {
      flat.push(...flattenPages(node.children));
    } else {
      flat.push(node);
    }
  }
  return flat;
}
