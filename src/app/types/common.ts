export type PaginatedResponse = {
    count :number,
    next: string | null,
    previous: string | null,
    results: any[]
}