/* 
  editable conditions 
*/
export const gapConditions = (value: string) => {
  return {
    "gap-1": value === "xs",
    "gap-2": value === "sm",
    "gap-4": value === "md",
    "gap-6": value === "lg",
    "gap-9": value === "xl",
  };
};

export const paddingConditions = (value: string) => {
  return {
    "p-2": value === "sm",
    "p-4": value === "md",
    "p-6": value === "lg",
    "p-9": value === "xl",
  };
};
export const paddingxConditions = (value: string) => {
  return {
    "px-2": value === "sm",
    "px-4": value === "md",
    "px-6": value === "lg",
    "px-9": value === "xl",
  };
};

export const paddingyConditions = (value: string) => {
  return {
    "py-2": value === "sm",
    "py-4": value === "md",
    "py-6": value === "lg",
    "p-9": value === "xl",
  };
};

export const sizeConditions = (value: string) => {
  return {
    "w-9 h-9": value === "sm",
    "w-12 h-12": value === "md",
    "w-16 h-16": value === "lg",
    "w-24 h-24": value === "xl",
  };
};

export const textColorConditions = (value: string) => {
  return {
    "text-gray-700": value === "primary",
    "text-gray-400": value === "light",
    "text-red-500": value === "error",
    "text-green-600": value === "success",
    "text-blue-500": value === "link-primary",
    "text-white": value === "white",
  };
};

export const textHoverColorConditions = (value: string) => {
  return {
    "hover:text-gray-700 active:text-gray-800": value === "primary",
    "hover:text-blue-400 active:text-blue-500": value === "light",
    "hover:text-red-700 active:text-red-800": value === "error",
    "hover:text-green-400 active:text-green-500": value === "success",
    "hover:text-blue-700 active:text-blue-800": value === "link-primary",
  };
};

export const bgColorConditions = (value: string) => {
  return {
    "bg-gray-500": value === "primary",
    "bg-red-500": value === "error",
    "bg-green-500": value === "success",
    "bg-yellow-500": value === "warning",
  };
};

export const roundedConditions = (value: string) => {
  return {
    rounded: value === "md",
    "rounded-lg": value === "lg",
    "rounded-full": value === "full",
  };
};

/* 
  noeditable conditions 
*/
export const justifyConditions = (value: string) => {
  return {
    "justify-start": value === "start",
    "justify-end": value === "end",
    "justify-center": value === "center",
    "justify-between": value === "between",
    "justify-around": value === "around",
    "justify-evenly": value === "evenly",
  };
};

/* 
  noeditable conditions 
*/
export const textAlignConditions = (value: string) => {
  return {
    "text-left": value === "left",
    "text-center": value === "center",
    "text-right": value === "right",
  };
};

export const itemsConditions = (value: string) => {
  return {
    "items-start": value === "start",
    "items-end": value === "end",
    "items-center": value === "center",
  };
};

export const widthConditions = (value: string) => {
  return {
    "w-full": value === "full",
    "w-full flex-1": value === "full-flex",
    "xl:w-3/4": value === "3/4", // 75%
    "xl:w-2/3": value === "2/3", // 66%
    "w-1/2": value === "1/2", // 50%
    "w-1/3": value === "1/3", // 33.3%
    "w-1/4": value === "1/4", // 25%
    "w-1/5": value === "1/5", // 20%
    "w-1/6": value === "1/6", // 16.6%
    "w-1/9": value === "1/9",
    "w-1/12": value === "1/12", // 8.3%

    "w-fit": value === "fit",
    "w-min": value === "min",
    "w-max": value === "max",
  };
};

export const transition = () => {
  return {
    "transition duration-150 ease-in-out": true,
  };
};

/* 
  methods 
*/
export const mixClass = (conditionsObject: any) => {
  let out = "";
  Object.keys(conditionsObject).map((k: string) =>
    conditionsObject[k] ? (out = out + " " + k) : null
  );
  return out;

  // return Object.keys(conditionsObject)
  //   .map((k: string) => (conditionsObject[k] ? k : ""))
  //   .join(" ");
};
