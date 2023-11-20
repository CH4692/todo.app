import React from "react";

const InputTitle = (props: {
  title: string | undefined;
  completed: boolean | undefined;
}) => {
  return (
    <>
      <div className="flex gap-3">
        <div>
          <div
            className={`font-bold ${
              props.completed ? "line-through text-neutral" : ""
            }`}
          >
            {props.title}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTitle;
