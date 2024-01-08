



export default function ContainerT({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className=" xl:mx-80 mt-5     ">

            {children}
        </div>
    )
}