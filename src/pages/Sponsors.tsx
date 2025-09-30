import { Card } from "@/components/ui/card";

const sponsors = [
    // 🔮 Just keep adding sponsors here
    {
        name: "SquareBoat",
        logo: "/Sponsor1.png",
        border: "border-purple-500/50 hover:border-purple-400/80",
        shadow: "hover:shadow-purple-500/30",
        textColor: "text-primary",
    },
    {
        name: "TruScholar",
        logo: "/Sponsor2.png",
        border: "border-blue-500/50 hover:border-blue-400/80",
        shadow: "hover:shadow-blue-500/30",
        textColor: "text-secondary",
    }
];

const Sponsors = () => {
    return (
        <section id="sponsors" className="relative py-20 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://res.cloudinary.com/drr3xypxn/image/upload/v1755089344/6_e2p4iq.jpg"
                    alt="Sponsor Background"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-cinzel font-bold text-center mb-6 demon-text drop-shadow-lg flex flex-col items-center">
                    Our Sponsors
                    <div className="text-base mt-2 text-gray-300" style={{ fontSize: "0.85em" }}>
                        私たちのスポンサー
                    </div>
                </h2>

                {/* Dynamic grid that adjusts automatically */}
                <div className="grid gap-8 max-w-6xl mx-auto"
                     style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                    {sponsors.map((sponsor, idx) => (
                        <Card
                            key={idx}
                            className={`p-8 bg-gray-900/95 backdrop-blur-xl ${sponsor.border} 
                            group transition-all duration-500 shadow-2xl ${sponsor.shadow} 
                            hover:scale-105 hover:shadow-xl`}
                        >
                            <div className="flex flex-col items-center justify-center">
                                {/* Logo */}
                                <div className="mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} Logo`}
                                        className="max-w-full max-h-32 object-contain drop-shadow-md"
                                    />
                                </div>
                                {/* Name */}
                                <div
                                    className={`text-xl font-bold ${sponsor.textColor} 
                                    group-hover:scale-110 transition-transform drop-shadow-lg text-center`}
                                >
                                    {sponsor.name}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
