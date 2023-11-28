import { useMemo } from "react";

export const usePagination = (totalPages) => {
    const pagesArray = useMemo(() => {
        const total = []
        for (let i = 0; i < totalPages; i++) {
            total.push(i + 1);
        }
        return total
    }, [totalPages]);
  return pagesArray;
};
