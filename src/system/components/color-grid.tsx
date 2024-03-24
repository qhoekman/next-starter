import React from 'react';

type Props = {
  title: string;
  colors: object;
};

export const ColorGrid: React.FC<Props> = ({ title, colors }) => {
  return (
    <div className="mb-8 flex flex-col rounded-lg  sm:flex-row">
      <h3 className="mb-8 w-40 text-2xl capitalize">{title}</h3>
      <div className="grid min-w-0 flex-1 grid-cols-5 justify-center gap-x-4 gap-y-3 lg:grid-cols-10">
        {Object.entries(colors).map(([key, color]) => {
          return (
            <div key={key} className="relative flex flex-col">
              <div
                className="box-border h-10 w-full rounded-sm "
                style={{
                  backgroundColor: color,
                }}
              />
              <div className=" flex flex-row justify-between bg-black px-2 text-xs text-gray-600  ">
                <span className="w-12 font-thin text-gray-50">{key}</span>
                <span className=" font-mono font-medium lowercase text-gray-200">{color}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
