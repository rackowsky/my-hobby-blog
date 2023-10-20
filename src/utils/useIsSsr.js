import { useEffect, useState } from "react"

const useIsSsr = () => {
    const [isSsr, setIsSsr] = useState(true)
    useEffect(() => {
        setIsSsr(false)
    }, [])

    return isSsr
}

export default useIsSsr
