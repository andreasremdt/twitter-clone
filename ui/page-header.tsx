import type { ReactNode } from "react";

type Props = {
  Control?: ReactNode;
  title: string;
};

const PageHeader = ({ title, Control }: Props) => (
  <header className="flex justify-between border-b border-slate-200 px-8 mt-8 pb-2">
    <h1 className="text-xl font-bold">{title}</h1>

    {Control}
  </header>
);

export default PageHeader;
