export const useSelector = <T>(selector: (...args: any[]) => T): T => {
  return selector();
};

export const useDispatch = () => () => {};
