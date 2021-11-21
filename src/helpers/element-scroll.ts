export const ToggleNoScrollToElement = (el: HTMLElement) => {
  const className = "overflow-hidden";

  if (el.classList.contains(className)) {
    el.classList.remove(className);
    return false;
  } else {
    el.classList.add(className);
    return true;
  }
};
