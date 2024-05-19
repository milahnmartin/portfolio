import React from 'react';
import clsx from 'clsx';
type Props = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  return (
    <section className={clsx(className, 'p-2 sm:p-4 md:p-8 lg:p-10')}>
      {children}
    </section>
  );
}

export default Section;
