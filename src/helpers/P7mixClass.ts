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
    "": value === "none",
    "py-2": value === "sm",
    "py-4": value === "md",
    "py-6": value === "lg",
    "p-9": value === "xl",
  };
};

/* coreersponding with tailwind config */
export const sizeConditions = (value: string) => {
  return {
    "w-9 h-9": value === "sm",
    "w-12 h-12": value === "md",
    "w-16 h-16": value === "lg",
    "w-24 h-24": value === "xl",
  };
};

export const textSizeConditions = (value: string) => {
  return {
    "text-xs": value === "xs",
    "text-sm": value === "sm",
    "text-md": value === "md",
    "text-lg": value === "lg",
    "text-xl": value === "xl",
    "text-4xl": value === "4xl",
  };
};

export const textColorConditions = (value: string, active?: boolean) => {
  return {
    "text-gray-600": value === "primary" && !active,
    "text-gray-500": value === "light" && !active,
    "text-red-600": value === "error" && !active,
    "text-green-700": value === "success" && !active,
    "text-blue-500": value === "link-primary" && !active,
    "text-white": value === "white" && !active,

    "text-gray-800": value === "primary" && active,
    "text-gray-700": value === "light" && active,
    "text-red-700": value === "error" && active,
    "text-green-800": value === "success" && active,
    "text-blue-700": value === "link-primary" && active,
    "text-gray-100": value === "white" && active,
  };
};

export const textHoverColorConditions = (value: string) => {
  return {
    "hover:text-gray-800 active:text-gray-900": value === "primary",
    "hover:text-blue-400 active:text-blue-500": value === "light",
    "hover:text-red-700 active:text-red-800": value === "error",
    "hover:text-green-400 active:text-green-500": value === "success",
    "hover:text-blue-700 active:text-blue-900": value === "link-primary",
  };
};

export const bgColorConditions = (value: string) => {
  return {
    "bg-gray-700": value === "primary",
    "bg-red-700": value === "error",
    "bg-green-700": value === "success",
    "bg-yellow-700": value === "warning",
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
    "": value === "null",
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
