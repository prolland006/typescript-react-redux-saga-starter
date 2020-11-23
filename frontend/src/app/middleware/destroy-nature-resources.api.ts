function getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }  

export const natureResourcesDestroyer = (): Promise<number> => {
  const promise = new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(getRandom(0,2));
    }, 1500);
  });

  return promise;
};
