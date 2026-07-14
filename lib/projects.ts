export type Project = {
  slug: string;
  title: string;
  description: string;
  price: string;
  gumroadUrl: string;
  thumbnail?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "freelance-income-tax-tracker-pro",
    title: "Freelance Income & Tax Tracker Pro",
    description:
      "A Notion template for freelancers: track income, deductible expenses, and tax deadlines in one place — no spreadsheets required.",
    price: "€19",
    gumroadUrl: "https://gumroad.com/luigiiamatore",
    tags: ["Notion", "Finance"],
  },
];
