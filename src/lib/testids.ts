export const testId = (testId: string | string[]) => {
  if (typeof testId === 'string') {
    return testId.toLowerCase();
  }

  return testId.join('__').toLowerCase();
};
