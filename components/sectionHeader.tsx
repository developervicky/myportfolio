import React from "react";

export default function SectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="text-xl font-semibold sm:text-3xl">{children}</h1>;
}
