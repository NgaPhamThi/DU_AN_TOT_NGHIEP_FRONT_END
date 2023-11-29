import instance from "./instance";

export const getColor = () => {
    return instance.get('/color')
}