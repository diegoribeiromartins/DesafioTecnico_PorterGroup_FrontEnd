export const ACTION_MAP = {
  EXAMPLE: "[MOVIEX] EXAMPLE",
};

export function example(payload: any) {
  return { type: ACTION_MAP.EXAMPLE, payload };
}
