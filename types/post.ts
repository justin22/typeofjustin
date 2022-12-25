export type Post = {
    id: number,
    number: number,
    title: string,
    body: string,
    updated_at: string,
    created_at: string
}

export type Posts = [ Post ];