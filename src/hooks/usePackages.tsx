import { useEffect, useState } from "react";

import courierApi from "../api/courierApi";
import { Package, PackagesResponse } from "../interfaces/appInterfaces";


const usePackages = ( username: string ) => {

    const [packages, setPackages] = useState<Package[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       getPackages();
    }, [])

    const getPackages = async () => {
        const resp = await courierApi.get<PackagesResponse>(`/packages/getPending?username=${username}`);
        setPackages( resp.data.responseObject );
        setIsLoading(false);
    }

    return {
        packages,
        isLoading
    }
}

export default usePackages
