/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const throttle = (callback: () => void, delay?: number) =>
  setTimeout(() => callback(), delay || 50);

const _requestAnimationFrameWrapper = () => {
  let previousTime = 0;

  if (globalThis.requestAnimationFrame) return globalThis.requestAnimationFrame;
  return (callback: (timeout: number) => void) => {
    /**
     * Credit to Paul Irish (@ www.paulirish.com) for creating/providing this polyfill
     */
    const timestamp = new Date().getTime();
    const timeout = Math.max(0, 16 - (timestamp - previousTime));
    const id = setTimeout(() => {
      callback(timestamp + timeout);
    }, 16); //corrected this line from 'timeout' in actual polyfill to '16' as it made animation slow and jank

    previousTime = timestamp + timeout;

    return id;
  };
};

const _requestAnimationFrame = _requestAnimationFrameWrapper();
// const _cancelAnimationFrame = _cancelAnimationFrameWrapper();

export const delay = (
  timeout: number,
  callback?: () => void,
  clearDelayCallback?: () => boolean
): Promise<number> => {
  if (isNaN(timeout)) {
    throw Error("'delay' expects a time [number] in milliseconds as parameter.");
  }

  return new Promise((resolve: (timeoutId: any) => void) => {
    let start = 0;
    let id = _requestAnimationFrame(animate);
    let clear = false;

    function animate(timestamp: number) {
      if (!start) {
        start = timestamp;
      }

      const timeElapsed = timestamp - start;

      if (timeElapsed < timeout && !clear) {
        id = _requestAnimationFrame(animate);
      } else {
        resolve(id);
      }

      clear = clearDelayCallback ? clearDelayCallback() : false;

      if (timeElapsed > timeout && !clear) {
        clear = true;

        if (timeElapsed % timeout < 17 && callback) {
          callback();
        }
      }
    }
  });
};

export const interval = (
  callback: () => void,
  _interval: number,
  clearIntervalCallback?: () => boolean
): Promise<number> => {
  if (isNaN(_interval)) {
    throw Error("'interval' expects a time [number] in milliseconds as parameter.");
  }

  return new Promise((resolve: (id: any) => void) => {
    let start = 0;
    let id = _requestAnimationFrame(animate);
    let clear = false;

    function animate(timestamp: number) {
      if (!start) {
        start = timestamp;
      }

      const timeElapsed = timestamp - start;

      if (!clear) {
        id = _requestAnimationFrame(animate);
      } else {
        resolve(id);
      }

      clear = clearIntervalCallback ? clearIntervalCallback() : false;

      if (timeElapsed > _interval) {
        if (timeElapsed % _interval < 17) {
          callback();
        }
      }
    }
  });
};

// function _cancelAnimationFrameWrapper() {
//   if (globalThis.cancelAnimationFrame) return globalThis.cancelAnimationFrame;
//   return (id: number) => {
//     clearTimeout(id);
//   };
// }
