import React from 'react';

type Props = {
  accessor: string;
  size: string;
};

export const SpaceItem: React.FC<Props> = ({ accessor, size }) => {
  return (
    <div className="relative flex w-full flex-row">
      <div className="h-5 bg-red-500" style={{ width: size }}></div>
      <div className="flex h-5 w-full items-center justify-center bg-red-100">
        <span className="font-mono text-xs text-gray-900">
          {accessor} ({size})
        </span>
      </div>
    </div>
  );
};
