export interface Book {
    title: string,
    authorship: string,
    image: string,
    gender: Gender,
    isFavorite: boolean
}

export interface Gender {
    id: string,
    value: string,
    books: Book[]
}
