import { Fragment, type ReactNode } from 'react';

type GenericListProps<T> = {
  label: string;
  className?: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
};

export const GenericList = <T,>({ label, className, items, renderItem, keyExtractor }: GenericListProps<T>) => (
  <section aria-label={label} className={className}>
    {items.map((item) => (
      <Fragment key={keyExtractor(item)}>{renderItem(item)}</Fragment>
    ))}
  </section>
);
