import EnaGif from "../assets/images/joelg-ena.gif"

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-2xl text-center">
            <div className="about-container flex flex-col gap-8">
                    <h1 className="font-semibold text-5xl">OOPS! Sorry about that</h1>
                    <h1>It seems that this page is not yet aviable</h1>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img src={EnaGif} alt="error gif"/>
                        
                        <h1>Angelo Martínez &copy; 2023 </h1>
                    </div>
            </div>
        </div>
    )
}

export default ErrorPage;