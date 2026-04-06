export type Quest = {
  availability: "available" | "hidden";
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
};
