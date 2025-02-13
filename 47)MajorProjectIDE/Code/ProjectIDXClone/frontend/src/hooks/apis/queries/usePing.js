import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping.js";

export default function usePing() {
    const { isLoading, isError, data, error } = useQuery({
        queryFn: pingApi,
        querykey: "ping",
        staleTime: 10000,
    });

    return {
        isError,
        isLoading,
        data,
        error,
    };
}
