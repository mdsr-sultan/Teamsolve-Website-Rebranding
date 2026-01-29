import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | TeamSolve",
  description: "Discover real-world examples of Knowledge Twin in use by utility teams worldwide",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
