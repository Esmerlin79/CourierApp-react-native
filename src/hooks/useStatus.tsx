import { useEffect, useState } from "react";

import courierApi from "../api/courierApi";
import { Statuses, StatusesResponse } from "../interfaces/appInterfaces";


const useStatus = ( internalTracking: string ) => {

    const [statuses, setStatuses] = useState<Statuses[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStatuses();
    }, [])

    const getStatuses = async () => {
        const resp = await courierApi.get<StatusesResponse>(`/packages/getStatuses?internalTracking=${internalTracking}`);
        setStatuses( resp.data.responseObject );
        setIsLoading(false);
    }

    return {
        statuses,
        isLoading
    }
}

export default useStatus
