export const _ = {
  group: (name: string) => {
    console.group(name);
  },
  groupEnd: () => {
    console.groupEnd();
  },
  log: (...props: any[]) => {
    console.log(...props);
  },
  error: (...props: any[]) => {
    console.error(...props);
  },
};
