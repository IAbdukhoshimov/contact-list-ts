import { ContactStorage } from "./mongodb/contact"

interface IStorage {
    sample: ContactStorage
}

export let storage: IStorage = {
    sample: new ContactStorage()
}