import * as Yup from "yup"

export const addContactSchema = Yup.object({
    name: Yup.string().required().trim(),
    email: Yup.string().email().required().trim(),
    phonenumber: Yup.string().min(10).required().trim(),
    description: Yup.string().min(10).required().trim(),
})

export type AddContactForm = Yup.InferType<typeof addContactSchema>
