export const createDivAndAppend  = (className: string, containerClassName: string = "root") => {
      const newPortalContainer = document.createElement("div");
  newPortalContainer.className = className;
  document.getElementById(containerClassName)?.appendChild(newPortalContainer);
  return newPortalContainer;
}