export type Quest = {
  id: number;
  availability: "available" | "hidden";
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
};
