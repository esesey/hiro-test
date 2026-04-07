export type Quest = {
  id: number;
  availability: "available" | "done" | "hidden";
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
};
