
import { ReactNode, useState } from "react";

export function Tabs({
  defaultValue,
  children,
  className = "",
}: {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}) {
  const [selected, setSelected] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child: any) =>
        child.type.name === "TabsList"
          ? React.cloneElement(child, { selected, setSelected })
          : child.type.name === "TabsContent"
          ? child.props.value === selected
            ? child
            : null
          : null
      )}
    </div>
  );
}

export function TabsList({
  children,
  selected,
  setSelected,
  className = "",
}: {
  children: ReactNode;
  selected?: string;
  setSelected?: (val: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { selected, setSelected })
      )}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  selected,
  setSelected,
}: {
  value: string;
  children: ReactNode;
  selected?: string;
  setSelected?: (val: string) => void;
}) {
  const isActive = value === selected;
  return (
    <button
      className={`px-4 py-2 rounded-full font-medium ${
        isActive ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
      onClick={() => setSelected?.(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  return <div className="mt-4">{children}</div>;
}
