
import { AddContactForm } from "../schemas/contact";
import instance from "./instance";

export const getAllContact = () => {
    return instance.get("/contact")
}

export const addCotact = (body: AddContactForm) => {
    const uri = "/contact";
    return instance.post(uri, body)
}
export const deleteContact = (id: string | number) => {
    const uri = "/contact/" + id
    return instance.delete(uri)
}


