/* 
  editable conditions 
*/
export const gapMix = (value: string) => {
  return {
    "": value === "none",
    "gap-1": value === "xs",
    "gap-2": value === "sm",
    "gap-4": value === "md",
    "gap-6": value === "lg",
    "gap-9": value === "xl",
  };
};

export const paddingxMix = (value: string) => {
  return {
    "": value === "none",
    "px-2": value === "sm",
    "px-4": value === "md",
    "px-6": value === "lg",
    "px-9": value === "xl",
  };
};

export const paddingyMix = (value: string) => {
  return {
    "": value === "none",
    "py-2": value === "sm",
    "py-4": value === "md",
    "py-6": value === "lg",
    "py-9": value === "xl",
  };
};

export const paddingrMix = (value: string) => {
  return {
    "": value === "none",
    "pr-2": value === "sm",
    "pr-4": value === "md",
    "pr-6": value === "lg",
    "pr-9": value === "xl",
  };
};

export const paddinglMix = (value: string) => {
  return {
    "": value === "none",
    "pl-2": value === "sm",
    "pl-4": value === "md",
    "pl-6": value === "lg",
    "pl-9": value === "xl",
  };
};

/* coreersponding with tailwind config */

export const textSizeMix = (value: string) => {
  return {
    "text-xs": value === "xs",
    "text-sm": value === "sm",
    "text-md": value === "md",
    "text-lg": value === "lg",
    "text-xl": value === "xl",
    "text-4xl": value === "xxl",
  };
};

export const textColorMix = (value: string, active?: boolean) => {
  return {
    "text-gray-700": value === "primary",
    "text-gray-400": value === "light",
    "text-gray-500": value === "dark",
    "text-red-600": value === "error",
    "text-green-700": value === "success",
    "text-green-200": value === "success-light",
    "text-blue-500": value === "link-primary",
    "text-white": value === "white",

    // "text-gray-700": value === "primary" && !active,
    // "text-gray-400": value === "light" && !active,
    // "text-gray-500": value === "dark" && !active,
    // "text-red-600": value === "error" && !active,
    // "text-green-700": value === "success" && !active,
    // "text-blue-500": value === "link-primary" && !active,
    // "text-white": value === "white" && !active,

    // "text-gray-800":
    //   (value === "primary" && active) || (value === "light" && active),
    // "text-red-700": value === "error" && active,
    // "text-green-800": value === "success" && active,
    // "text-blue-700": value === "link-primary" && active,
    // "text-gray-100": value === "white" && active,
  };
};

export const textHoverColorMix = (value: string) => {
  return {
    "hover:text-gray-800 active:text-gray-900": value === "primary",
    "hover:text-blue-400 active:text-blue-500": value === "light",
    "hover:text-blue-500 active:text-blue-600": value === "dark",
    "hover:text-red-700 active:text-red-800": value === "error",
    "hover:text-green-400 active:text-green-500": value === "success",
    "hover:text-blue-700 active:text-blue-900": value === "link-primary",
  };
};

export const bgColorMix = (value: string) => {
  return {
    "bg-gray-700": value === "primary",
    "bg-red-700": value === "error",
    "bg-green-700": value === "success",
    "bg-yellow-600": value === "warning",
    "bg-blue-700": value === "info",
    "bg-gray-50": value === "light",
    "bg-gray-500": value === "dark",
    "bg-gray-300 bg-opacity-20": value === "primary-light",
    "bg-red-300 bg-opacity-20": value === "error-light",
    "bg-green-300 bg-opacity-20": value === "success-light",
    "bg-yellow-300 bg-opacity-20": value === "warning-light",
    "bg-blue-300 bg-opacity-20": value === "info-light",
  };
};

export const roundedMix = (value: string) => {
  return {
    rounded: value === "md",
    "rounded-lg": value === "lg",
    "rounded-full": value === "full",
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
