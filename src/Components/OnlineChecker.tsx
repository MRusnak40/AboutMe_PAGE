import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast"



export default function OnlineChecker() {

    const [isOnline, setIsOnline] = useState<boolean>(true);

    const firstLoad = useRef(true);

    const OfflineState = (() => { toast.error("Wifi is gone🛑") })
    const OnlineState = (() => { toast.success("You are ONLINE 🌐") })

    useEffect(() => {


        const CheckingInternetConnect = async () => {

            try {
                await fetch("https://www.google.com", {
                    mode: "no-cors",
                    cache: "no-store",
                    signal: AbortSignal.timeout(3000)
                })

                setIsOnline(true)


            } catch (err) {
                console.log(err)
                setIsOnline(false)

            }



        };



        const interval = setInterval(() => { CheckingInternetConnect(); }, 1000);



        return () => clearInterval(interval);



    }, [])


    useEffect(() => {

        if (firstLoad.current == true) {
            firstLoad.current = false;
            return;
        }else{

        if (isOnline) {

            OnlineState()
        } else {
            OfflineState()
        }
    }
    }, [isOnline])








    return null;
}


