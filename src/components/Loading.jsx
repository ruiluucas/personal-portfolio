export default function Loading() {
    return (
        <article className="absolute flex h-screen w-screen flex-col items-center justify-center  text-white">
            <h2 className="text-center text-xl font-extrabold">
                For a better experience,
            </h2>
            <h1 className="text-center text-3xl font-extrabold text-green-600">
                Enable camera access
            </h1>
            <p className="font-semibold">
                Show your palm to the camera or change pages using the numbers on
                the keyboard!
            </p>
        </article>
    )
}