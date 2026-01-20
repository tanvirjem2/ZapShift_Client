import reviewQuote from "../../../assets/reviewQuote.png";

const TestimonialCard = ({ testimonial, position }) => {
    const { text, name, role } = testimonial;

    let styles =
        "absolute transition-all duration-500 ease-in-out";

    if (position === 0) {
        // Center card
        styles += " scale-100 opacity-100 z-20 translate-y-0";
    } else if (position === -1) {
        // Left card
        styles += " -translate-x-[360px] translate-y-12 scale-95 opacity-30 z-10";
    } else if (position === 1) {
        // Right card
        styles += " translate-x-[360px] translate-y-12 scale-95 opacity-30 z-10";
    } else {
        // Hidden cards
        styles += " opacity-0 scale-90 pointer-events-none";
    }

    return (
        <div className={styles}>
            <div className="w-[320px] bg-white p-8 rounded-3xl shadow-md">

                <img src={reviewQuote} className="mb-4" alt="" />

                <p className="text-sm text-gray-600 mb-6">{text}</p>

                <hr className="border-dashed mb-4 border-[#03464D]" />

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#03464D]" />
                    <div>
                        <h4 className="font-semibold text-[#03464D]">{name}</h4>
                        <p className="text-xs text-gray-500">{role}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;
