import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog-posts");
const caseStudiesDirectory = path.join(process.cwd(), "content/case-studies");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
  linkedinUrl?: string;
  tags?: string[];
  company?: string;
  contentHtml?: string;
}

export async function getMarkdownData(directory: string, slug: string): Promise<PostData> {
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(data as Omit<PostData, "slug" | "contentHtml">),
  };
}

export function getAllMarkdownSlugs(directory: string): string[] {
  try {
    const fileNames = fs.readdirSync(directory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<PostData[]> {
  const slugs = getAllMarkdownSlugs(postsDirectory);
  const posts = await Promise.all(
    slugs.map((slug) => getMarkdownData(postsDirectory, slug))
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllCaseStudies(): Promise<PostData[]> {
  const slugs = getAllMarkdownSlugs(caseStudiesDirectory);
  const caseStudies = await Promise.all(
    slugs.map((slug) => getMarkdownData(caseStudiesDirectory, slug))
  );
  return caseStudies.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostData> {
  return getMarkdownData(postsDirectory, slug);
}

export async function getCaseStudyBySlug(slug: string): Promise<PostData> {
  return getMarkdownData(caseStudiesDirectory, slug);
}
