import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const sponsors = [
    // 🔮 Just keep adding sponsors here
    {
        name: "Eleven Labs",
        logo: "/S1.png",
        border: "border-purple-500/30 hover:border-purple-400/50",
        shadow: "hover:shadow-purple-500/20",
        textColor: "text-purple-400",
        level: "Diamond Sponsor"
    },
    {
        name: "BenQ",
        logo: "/S2.png",
        border: "border-blue-500/30 hover:border-blue-400/50",
        shadow: "hover:shadow-blue-500/20",
        textColor: "text-blue-400",
        level: "Golden Sponsor"
    },
    {
        name: "Market Mafiaa",
        logo: "/S3.png",
        border: "border-yellow-500/30 hover:border-yellow-400/50",
        shadow: "hover:shadow-yellow-500/20",
        textColor: "text-yellow-400",
        level: "Branding Partner"
    },
    {
        name: "Monster Energy",
        logo: "/S4.png",
        border: "border-red-500/30 hover:border-red-400/50",
        shadow: "hover:shadow-red-500/20",
        textColor: "text-red-400",
        level: "Exclusive Energy Drink Partner"
    },
    {
        name: "AbhiBus",
        logo: "/S5.jpg",
        border: "border-cyan-500/30 hover:border-cyan-400/50",
        shadow: "hover:shadow-cyan-500/20",
        textColor: "text-cyan-400",
        level: "Official Travel Partner"
    },
    {
        name: "Osata Perfumes",
        logo: "/S6.jpg",
        border: "border-pink-500/30 hover:border-pink-400/50",
        shadow: "hover:shadow-pink-500/20",
        textColor: "text-pink-400",
        level: "Fragrance Partner"
    },
    {
        name: "Code Crafter",
        logo: "/S7.jpeg",
        border: "border-green-500/30 hover:border-green-400/50",
        shadow: "hover:shadow-green-500/20",
        textColor: "text-green-400",
        level: "Technical Partner"
    },
    {
        name: "Burrah",
        logo: "/S8.png",
        border: "border-indigo-500/30 hover:border-indigo-400/50",
        shadow: "hover:shadow-indigo-500/20",
        textColor: "text-indigo-400",
        level: "Drink Partner"
    },
    {
        name: "Squareboat",
        logo: "/S9.png",
        border: "border-orange-500/30 hover:border-orange-400/50",
        shadow: "hover:shadow-orange-500/20",
        textColor: "text-orange-400",
        level: "Supporting Partner"
    },
    {
        name: "Truscholar",
        logo: "/S10.png",
        border: "border-teal-500/30 hover:border-teal-400/50",
        shadow: "hover:shadow-teal-500/20",
        textColor: "text-teal-400",
        level: "Supporting Partner"
    }
];

const Sponsors = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: -50,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.7)"
                }
            );

            // Carousel animation
            gsap.fromTo(carouselRef.current,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.5,
                    delay: 0.3,
                    ease: "power3.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="sponsors" className="relative py-20 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/BGs/6.jpg"
                    alt="Sponsor Background"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h2 ref={titleRef} className="text-4xl font-cinzel font-bold text-center mb-6 demon-text drop-shadow-lg flex flex-col items-center">
                    Our Sponsors
                    <div className="text-base mt-2 text-gray-300" style={{ fontSize: "0.85em" }}>
                        私たちのスポンサー
                    </div>
                </h2>

                {/* Carousel for sponsors */}
                <div ref={carouselRef} className="max-w-6xl mx-auto">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                        className="w-full"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-1">
                            {sponsors.map((sponsor, idx) => (
                                <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card
                                            className={`h-[320px] flex flex-col justify-center items-center p-6 
                                            bg-transparent backdrop-blur-none border border-white/10
                                            group transition-all duration-700 shadow-none hover:shadow-2xl
                                            hover:scale-105 hover:rotate-1 hover:-translate-y-2
                                            ${sponsor.border} ${sponsor.shadow}
                                            relative overflow-hidden rounded-2xl`}
                                        >
                                            {/* Complete transparent effect similar to Tracks section */}
                                            <div className="absolute inset-0 bg-card/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            
                                            {/* Animated border glow */}
                                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                                bg-gradient-to-r ${sponsor.border.replace('border-', 'from-').replace('/30', '/20')} ${sponsor.border.replace('border-', 'to-').replace('/30', '/20')}
                                                blur-md -z-10`}></div>

                                            <div className="flex flex-col items-center justify-center relative z-10 w-full">
                                                {/* Partner level badge */}
                                                <div className="mb-2">
                                                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300">
                                                        {sponsor.level}
                                                    </span>
                                                </div>
                                                
                                                {/* Logo with enhanced animation */}
                                                <div className="mb-4 rounded-xl flex items-center justify-center overflow-hidden
                                                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                    <img
                                                        src={sponsor.logo}
                                                        alt={`${sponsor.name} Logo`}
                                                        className="max-w-full max-h-20 object-contain drop-shadow-sm
                                                        group-hover:drop-shadow-xl transition-all duration-500"
                                                    />
                                                </div>
                                                
                                                {/* Name with enhanced animation */}
                                                <div
                                                    className={`text-lg font-bold ${sponsor.textColor}
                                                    group-hover:scale-110 transition-all duration-500
                                                    text-center relative`}
                                                >
                                                    {sponsor.name}
                                                </div>
                                            </div>

                                            {/* Subtle hover effects */}
                                            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white/20 rounded-full opacity-0 group-hover:opacity-100
                                                animate-ping animation-delay-100"></div>
                                            <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/10 rounded-full opacity-0 group-hover:opacity-100
                                                animate-ping animation-delay-300"></div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all duration-300" />
                        <CarouselNext className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all duration-300" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;