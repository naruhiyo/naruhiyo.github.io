import React from 'react';

type PageHeaderProps = {
  number: string;
  label: string;
  title: string;
  emphasis: string;
};

export const PageHeader = ({ number, label, title, emphasis }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="page-number">{number}</div>
      <div>
        <p className="page-label">{label}</p>
        <h2 className="page-title">
          {title}
          <em>{emphasis}</em>
        </h2>
      </div>
    </div>
  );
};
