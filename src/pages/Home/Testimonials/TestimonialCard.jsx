import reviewQuote from "../../../assets/reviewQuote.png";

const TestimonialCard = ({ testimonial, position, isActive }) => {
    const { text, name, role } = testimonial;

    let styles = "absolute transition-all duration-700 ease-in-out ";

    if (position === 0) {
        styles += "z-30 opacity-100 scale-100 translate-x-0";
    } else if (Math.abs(position) === 1) {
        styles += `z-20 opacity-40 scale-90 ${position === -1 ? "-translate-x-[400px]" : "translate-x-[400px]"} translate-y-10`;
    } else if (Math.abs(position) === 2) {
        styles += `z-10 opacity-10 scale-75 ${position === -2 ? "-translate-x-[750px]" : "translate-x-[750px]"} translate-y-16`;
    } else {
        styles += "opacity-0 scale-50 pointer-events-none";
    }

    return (
        <div className={styles}>
            <div className="w-87.5 bg-white p-10 rounded-[2.5rem] shadow-xl text-left border border-gray-100">
                <span className="font-serif text-[#B2E2E7] block">
                    <img src={reviewQuote} alt="" />
                </span>
                <p className="text-gray-600 mb-8 leading-relaxed">{text}</p>
                <hr className="border-dashed mb-6 border-gray-200" />
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full transition-colors duration-500 ${isActive ? 'bg-[#03373D]' : 'bg-gray-200'}`} />
                    <div>
                        <h4 className="font-bold text-[#03373D]">{name}</h4>
                        <p className="text-xs text-gray-400">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
