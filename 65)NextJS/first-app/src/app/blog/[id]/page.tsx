export default function Blogs({
    params: {
        params: { id: string },
    },
}) {
    return <>Blog{params.id}</>;
}
