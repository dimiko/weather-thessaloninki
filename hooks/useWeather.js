import {getWeather as apiGetWeather } from '/services/weather'
import {useQuery, useQueryClient} from "@tanstack/react-query";

export default function useWeather() {
    const queryClient = useQueryClient()
    const queryKey = ['results']


    const {
        data: weatherData,
        error,
        isLoading
    } = useQuery(queryKey, async () => {
        const response = await apiGetWeather()
        return response.data;
    })

    return {
        weatherData: weatherData ? weatherData : [],
        error,
        isLoading
    }
}
