import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

const ForWhom = () => {
    return (
        <div className="min-h-screen">
            <NavBar />
            <div className="w-screen h-screen bg-yellow-900 flex flex-col items-center gap-28 max-sm:justify-center max-sm:gap-10 xl:pt-48 lg:'pt-48 md:pt-48 sm:pt-48">
                <h2 className="text-white text-3xl">Dla kogo?</h2>
                <p className="text-white text-lg w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta facilis laboriosam aperiam molestiae et! Magni, consequatur! Ipsam labore, iusto illo aliquam ex sequi consequuntur facere dicta error fuga itaque!</p>
            </div>
            <Footer />
        </div>
    )
}

export default ForWhom