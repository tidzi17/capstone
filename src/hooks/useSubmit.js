import { useReserveContext } from "context/reserveContext";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useSubmit = () => {
    const { onFetching, onSuccess, bookingTimes } = useReserveContext();

    const postReserve = async (url, { date, time, message }) => {
        onFetching();

        await wait(2000);
        onSuccess({ bookingTimes: [...bookingTimes, { date, time }], message });
    }

    return { postReserve };
};

export default useSubmit;