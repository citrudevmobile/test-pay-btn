export const euseSelector = <T>(selector: (...args: any[]) => T): T => {
  return selector();
};

export const euseDispatch = () => () => {};
