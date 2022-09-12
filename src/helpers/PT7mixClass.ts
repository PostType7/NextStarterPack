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
    "text-red-400": value === "error",
    "text-green-400": value === "success",
    "text-teal-600": value === "link-primary",
    "text-white": value === "white",
  };
};

export const textHoverColorConditions = (value: string) => {
  return {
    "hover:text-gray-700": value === "primary",
    "hover:text-gray-300": value === "light",
    "hover:text-red-400": value === "error",
    "hover:text-green-400": value === "success",
    "hover:text-teal-800": value === "link-primary",
  };
};

export const bgColorConditions = (value: string) => {
  return {
    "bg-gray-300": value === "primary",
    "bg-red-300": value === "error",
    "bg-green-300": value === "success",
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

export const widthConditions = (value: string) => {
  return {
    "w-full flex-1": value === "full",
    "w-1/2": value === "half",
    "w-1/3": value === "third",
    "w-1/4": value === "quarter",
    "w-1/5": value === "fifth",
    "w-1/6": value === "sixth",
    "w-1/12": value === "twelfth",

    "w-fit": value === "fit",
    "w-min": value === "min",
    "w-max": value === "max",
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
