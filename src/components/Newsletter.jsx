const Newsletter = () => {
    return (
        <>
            <div className="news relative flex items-center justify-center mx-auto p-12 bg-gray-900 text-slate-50">
                <div className="news-text flex flex-col gap-4 items-center text-center">
                    <h2 className="font-bold text-4xl">Newsletter</h2>
                    <form className="flex gap-4 items-center">
                        <input className="border-solid md:w-56 border-b-2 border-white bg-transparent
                        text-white placeholder-white focus:outline-none"
                         type="email" placeholder="your@email.com" />
                        <button className="cursor-pointer p-1 
                        rounded-md border-solid border-2 border-white font-semibold
                        transition-all duration-300
                        hover:bg-slate-50 hover:text-gray-900"
                        type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Newsletter;