import { useEffect } from "react";

export const useMount = function useMount(fn: any) {
  useEffect(function () {
    fn === null || fn === void 0 ? void 0 : fn();
  }, []);
};
