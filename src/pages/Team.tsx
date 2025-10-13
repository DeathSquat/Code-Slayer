import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useState } from "react";

// Add CSS for scrolling animations
const styles = `
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
  width: max-content;
  display: flex;
  flex-wrap: nowrap;
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
  width: max-content;
  display: flex;
  flex-wrap: nowrap;
}

.animate-scroll-left:hover,
.animate-scroll-right:hover {
  animation-play-state: paused;
}

/* Enhanced container for full-width coverage */
.scrolling-container {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: visible;
  position: relative;
}

.scrolling-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  padding: 2rem 1rem;
  overflow: visible;
}

/* Card container to prevent edge cutting */
.card-container {
  padding: 1rem;
  overflow: visible;
  position: relative;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

const teamMembers = [
    {
        name: "Nisha Kumari",
        linkedin: "http://www.linkedin.com/in/nisha-kumari-4588b1303",
        image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755087931/Nisha_kumari_i5wr3f.jpg",
        role: <>Founder</>,
        color: "green"
    },
    {
        name: "Arabhay Aggarwal",
        linkedin: "https://www.linkedin.com/in/arabhay-agrawal-493761343/",
        image: "/Arabhay.jpg",
        role: <>Founder</>,
        color: "teal"
    },
    {
        name: "Nitin Sengar",
        linkedin: "https://www.linkedin.com/in/contactnitinsengar/",
        image: "/Nitin.jpg",
        role: <>Community Manager</>,
        color: "green"
    },
    {
        name: "Nishchay Chaurasia",
        linkedin: "https://www.linkedin.com/in/nishchaync-83b8152b0/",
        image: "/Nishchay.jpg", // URL encoded for spaces
        role: <>Technical Lead</>,
        color: "indigo"
    },
    {
        name: "Ishaan Verma",
        linkedin: "www.linkedin.com/in/ishaan-verma-2286922a0/",
        image: "/Ishaan.jpg",
        role: <>Technical Team</>,
        color: "orange"
    },
    {
        name: "Soumen Das",
        linkedin: "https://www.linkedin.com/in/soumen-das-76b867218/",
        image: "/Soumen.jpg",
        role: <>Technical Team</>,
        color: "pink"
    },
    {
        name: "Nishant Sankar Swain",
        linkedin: "https://www.linkedin.com/in/nishant-sankar-swain-1abb71246/",
        image: "/Nishant.jpg",
        role: <>Technical Team</>,
        color: "purple"
    },
    {
        name: "Riya Mittal",
        linkedin: "https://www.linkedin.com/in/riya-mittal-777407321/",
        image: "/RiyaM.jpg",
        role: <>PR Team</>,
        color: "cyan"
    },
    {
        name: "Mansi Dixit",
        linkedin: "https://in.linkedin.com/in/mansidixit2309/",
        image: "/Mansi.jpg",
        role: <>PR Team</>,
        color: "lime"
    },
    {
        name: "Abhijna Laxmi",
        linkedin: "https://www.linkedin.com/in/abhijna-laxmi-659143298/",
        image: "/Abhijna.png",
        role: <>PR Team</>,
        color: "emerald"
    },
    {
        name: "Tushar Kumar",
        linkedin: "https://www.linkedin.com/in/tushar-kumar-76a354322/",
        image: "/Tushar.png",
        role: <>PR Team</>,
        color: "violet"
    },
    {
        name: "Parth Jain",
        linkedin: "https://www.linkedin.com/in/parth-jain-529378347",
        image: "/Parth.png",
        role: <>PR Team</>,
        color: "rose"
    },
    {
        name: "Mehak Chauhan",
        linkedin: "https://www.linkedin.com/in/mehak-chauhan-591a72291/",
        image: "/Mehak.jpg",
        role: <>PR and Social Team</>,
        color: "amber"
    },
    {
        name: "Riya Chhabra",
        linkedin: "https://www.linkedin.com/in/riya-chhabra-056821330/",
        image: "/RiyaC.webp",
        role: <>Social Team</>,
        color: "sky"
    },
    {
        name: "Rahul Goyal",
        linkedin: "https://www.linkedin.com/in/rahulgoyal83789/",
        image: "/Rahul.jpg",
        role: <>Social Team</>,
        color: "teal"
    },
    {
        name: "Kanishka",
        linkedin: "http://www.linkedin.com/in/kanishka-verma-732b8b2a2/",
        image: "/Kanishka.jpg",
        role: <>Graphics Team</>,
        color: "fuchsia"
    },
    {
        name: "Ronak Bhardwaj",
        linkedin: "https://www.linkedin.com/in/ronak-bh94/",
        image: "/Ronak.jpg",
        role: <>Management Team</>,
        color: "slate"
    },
    {
        name: "Tushar Sharma",
        linkedin: "https://www.linkedin.com/in/tushar-sharma-812689316/",
        image: "/Tushar.jpg",
        role: <>Management Team</>,
        color: "stone"
    },
    {
        name: "Santosh Kumar",
        linkedin: "https://www.linkedin.com/in/santosh-kumar-verma-20899330a/",
        image: "/Santosh.jpg",
        role: <>Sponsorship Head</>,
        color: "red"
    },
    {
        name: "Advay Anand",
        linkedin: "https://www.linkedin.com/in/advay-anand-a89024277/",
        image: "/Advay.jpg",
        role: <>Sponsorship Team</>,
        color: "blue"
    },
];
const mentors = [
    // Add mentor objects here
];
const judges = [
    // Add judge objects here
];

const tabs = [
    { label: "Team", value: "team" },
    { label: "Mentors", value: "mentors" },
    { label: "Judges", value: "judges" },
];

const Team = () => {
    const [activeTab, setActiveTab] = useState("team");
    const getMembers = () => {
        if (activeTab === "team") return teamMembers;
        if (activeTab === "mentors") return mentors;
        if (activeTab === "judges") return judges;
        return [];
    };

    // Split team members into two rows for different showcases
    const firstRowMembers = teamMembers.slice(0, 10); // Nisha to Abhijna
    const secondRowMembers = teamMembers.slice(10); // Tushar to Advay

    return (
        <section id="team" className="relative py-20 px-4 overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <img src="/7.png" alt="Team Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-4xl font-cinzel font-bold text-center mb-6 demon-text drop-shadow-lg flex flex-col items-center">
                    MEET THE TEAM
                </h2>
                <p className="text-center text-3xl text-primary mb-8 drop-shadow-md font-cinzel font-bold ">Code Slayer</p>
                {/* Tab Navigation */}
                <div className="flex justify-center mb-10">
                    <div className="bg-gray-900/80 rounded-xl shadow-lg flex">
                        {tabs.map(tab => (
                            <button
                                key={tab.value}
                                className={`flame-hover px-6 py-3 font-semibold text-lg rounded-xl transition-all duration-300 focus:outline-none ${activeTab === tab.value ? "bg-primary text-white shadow-md" : "text-gray-300 hover:bg-gray-800"}`}
                                onClick={() => setActiveTab(tab.value)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Scrolling Members */}
                <div className="space-y-16">
                    {/* First Row - Scroll Left */}
                    <div className="scrolling-container">
                        <div className="scrolling-wrapper animate-scroll-left">
                            {/* Triple duplication for seamless infinite loop */}
                            {[...firstRowMembers, ...firstRowMembers, ...firstRowMembers].map((member, index) => (
                                <div key={`left-${index}`} className="flex-shrink-0 w-80">
                                    <div className="group relative perspective-1000">
                                        <div className="relative w-full h-[400px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                            {/* Outer Glow */}
                                            <div className={`absolute -inset-4 bg-gradient-to-r ${getColorGradient(member.color)} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}></div>
                                            {/* Border Glow */}
                                            <div className={`absolute -inset-1 bg-gradient-to-r ${getColorGradient(member.color)} rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
                                            {/* Main Card */}
                                            <Card className={`relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border ${getBorderColor(member.color)} rounded-xl overflow-hidden transition-all duration-500 shadow-2xl ${getHoverShadow(member.color)}`}>
                                              <div className="relative p-8 h-full flex flex-col items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                                {/* Profile Image */}
                                                <div className="relative mb-6 transform group-hover:scale-110 transition-all duration-500">
                                                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                                  </div>
                                                  <div className={`absolute -bottom-2 -right-2 w-10 h-10 ${getCheckColor(member.color)} rounded-full flex items-center justify-center shadow-lg`}>
                                                    <span className="text-white text-sm font-bold">✓</span>
                                                  </div>
                                                </div>
                                                {/* Name */}
                                                <h3 className={`text-2xl font-bold mb-2 ${getTextColor(member.color)} group-hover:text-white transition-colors duration-300 drop-shadow-lg`}>
                                                  {member.name}
                                                </h3>
                                                {/* Role Badge */}
                                                <div className="mb-6">
                                                  <span className={`${getRoleBg(member.color)} px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border`}>
                                                    {member.role}
                                                  </span>
                                                </div>
                                                {/* LinkedIn Button */}
                                                <div className="mt-auto">
                                                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`group/btn inline-flex items-center px-6 py-3 ${getButtonColor(member.color)} text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border cursor-pointer no-underline`}>
                                                    <Linkedin className="mr-2 h-5 w-5 drop-shadow-lg group-hover/btn:scale-110 transition-transform duration-300" />
                                                    <span className="font-medium drop-shadow-md">Connect</span>
                                                  </a>
                                                </div>
                                              </div>
                                              {/* Animated Elements */}
                                              <div className={`absolute inset-0 bg-gradient-to-br ${getHoverBg(member.color)} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                                              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${getAccentColor(member.color)} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                                              {/* Corner Accents */}
                                              <div className={`absolute top-4 right-4 w-2 h-2 ${getAccentColor(member.color)} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                              <div className={`absolute bottom-4 left-4 w-2 h-2 ${getAccentColor(member.color)} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                            </Card>
                                          </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    
                    {/* Second Row - Scroll Right */}
                    <div className="scrolling-container">
                        <div className="scrolling-wrapper animate-scroll-right">
                            {/* Triple duplication for seamless infinite loop */}
                            {[...secondRowMembers, ...secondRowMembers, ...secondRowMembers].map((member, index) => (
                                <div key={`right-${index}`} className="flex-shrink-0 w-80">
                                    <div className="group relative perspective-1000">
                                        <div className="relative w-full h-[400px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                            {/* Outer Glow */}
                                            <div className={`absolute -inset-4 bg-gradient-to-r ${getColorGradient(member.color)} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}></div>
                                            {/* Border Glow */}
                                            <div className={`absolute -inset-1 bg-gradient-to-r ${getColorGradient(member.color)} rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
                                            {/* Main Card */}
                                            <Card className={`relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border ${getBorderColor(member.color)} rounded-xl overflow-hidden transition-all duration-500 shadow-2xl ${getHoverShadow(member.color)}`}>
                                              <div className="relative p-8 h-full flex flex-col items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                                {/* Profile Image */}
                                                <div className="relative mb-6 transform group-hover:scale-110 transition-all duration-500">
                                                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                                  </div>
                                                  <div className={`absolute -bottom-2 -right-2 w-10 h-10 ${getCheckColor(member.color)} rounded-full flex items-center justify-center shadow-lg`}>
                                                    <span className="text-white text-sm font-bold">✓</span>
                                                  </div>
                                                </div>
                                                {/* Name */}
                                                <h3 className={`text-2xl font-bold mb-2 ${getTextColor(member.color)} group-hover:text-white transition-colors duration-300 drop-shadow-lg`}>
                                                  {member.name}
                                                </h3>
                                                {/* Role Badge */}
                                                <div className="mb-6">
                                                  <span className={`${getRoleBg(member.color)} px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border`}>
                                                    {member.role}
                                                  </span>
                                                </div>
                                                {/* LinkedIn Button */}
                                                <div className="mt-auto">
                                                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`group/btn inline-flex items-center px-6 py-3 ${getButtonColor(member.color)} text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border cursor-pointer no-underline`}>
                                                    <Linkedin className="mr-2 h-5 w-5 drop-shadow-lg group-hover/btn:scale-110 transition-transform duration-300" />
                                                    <span className="font-medium drop-shadow-md">Connect</span>
                                                  </a>
                                                </div>
                                              </div>
                                              {/* Animated Elements */}
                                              <div className={`absolute inset-0 bg-gradient-to-br ${getHoverBg(member.color)} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                                              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${getAccentColor(member.color)} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                                              {/* Corner Accents */}
                                              <div className={`absolute top-4 right-4 w-2 h-2 ${getAccentColor(member.color)} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                              <div className={`absolute bottom-4 left-4 w-2 h-2 ${getAccentColor(member.color)} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                            </Card>
                                          </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;

// Helper functions for color management
const getColorGradient = (color: string) => {
    const gradients = {
        green: 'from-green-500/30 via-emerald-500/40 to-green-500/30',
        teal: 'from-teal-500/30 via-cyan-500/40 to-teal-500/30',
        purple: 'from-purple-500/30 via-violet-500/40 to-purple-500/30',
        orange: 'from-orange-500/30 via-amber-500/40 to-orange-500/30',
        pink: 'from-pink-500/30 via-rose-500/40 to-pink-500/30',
        indigo: 'from-indigo-500/30 via-blue-500/40 to-indigo-500/30',
        cyan: 'from-cyan-500/30 via-sky-500/40 to-cyan-500/30',
        lime: 'from-lime-500/30 via-green-500/40 to-lime-500/30',
        emerald: 'from-emerald-500/30 via-teal-500/40 to-emerald-500/30',
        violet: 'from-violet-500/30 via-purple-500/40 to-violet-500/30',
        rose: 'from-rose-500/30 via-pink-500/40 to-rose-500/30',
        amber: 'from-amber-500/30 via-orange-500/40 to-amber-500/30',
        sky: 'from-sky-500/30 via-cyan-500/40 to-sky-500/30',
        fuchsia: 'from-fuchsia-500/30 via-purple-500/40 to-fuchsia-500/30',
        slate: 'from-slate-500/30 via-gray-500/40 to-slate-500/30',
        stone: 'from-stone-500/30 via-neutral-500/40 to-stone-500/30',
        red: 'from-red-500/30 via-rose-500/40 to-red-500/30',
        blue: 'from-blue-500/30 via-indigo-500/40 to-blue-500/30',
        yellow: 'from-yellow-500/30 via-amber-500/40 to-yellow-500/30'
    };
    return gradients[color] || gradients.green;
};

const getBorderColor = (color: string) => {
    const borders = {
        green: 'border-green-500/50 hover:border-green-400/90',
        teal: 'border-teal-500/50 hover:border-teal-400/90',
        purple: 'border-purple-500/50 hover:border-purple-400/90',
        orange: 'border-orange-500/50 hover:border-orange-400/90',
        pink: 'border-pink-500/50 hover:border-pink-400/90',
        indigo: 'border-indigo-500/50 hover:border-indigo-400/90',
        cyan: 'border-cyan-500/50 hover:border-cyan-400/90',
        lime: 'border-lime-500/50 hover:border-lime-400/90',
        emerald: 'border-emerald-500/50 hover:border-emerald-400/90',
        violet: 'border-violet-500/50 hover:border-violet-400/90',
        rose: 'border-rose-500/50 hover:border-rose-400/90',
        amber: 'border-amber-500/50 hover:border-amber-400/90',
        sky: 'border-sky-500/50 hover:border-sky-400/90',
        fuchsia: 'border-fuchsia-500/50 hover:border-fuchsia-400/90',
        slate: 'border-slate-500/50 hover:border-slate-400/90',
        stone: 'border-stone-500/50 hover:border-stone-400/90',
        red: 'border-red-500/50 hover:border-red-400/90',
        blue: 'border-blue-500/50 hover:border-blue-400/90',
        yellow: 'border-yellow-500/50 hover:border-yellow-400/90',
    };
    return borders[color] || borders.green;
};

const getHoverShadow = (color: string) => {
    const shadows = {
        green: 'hover:shadow-green-500/40',
        teal: 'hover:shadow-teal-500/40',
        purple: 'hover:shadow-purple-500/40',
        orange: 'hover:shadow-orange-500/40',
        pink: 'hover:shadow-pink-500/40',
        indigo: 'hover:shadow-indigo-500/40',
        cyan: 'hover:shadow-cyan-500/40',
        lime: 'hover:shadow-lime-500/40',
        emerald: 'hover:shadow-emerald-500/40',
        violet: 'hover:shadow-violet-500/40',
        rose: 'hover:shadow-rose-500/40',
        amber: 'hover:shadow-amber-500/40',
        sky: 'hover:shadow-sky-500/40',
        fuchsia: 'hover:shadow-fuchsia-500/40',
        slate: 'hover:shadow-slate-500/40',
        stone: 'hover:shadow-stone-500/40',
        red: 'hover:shadow-red-500/40',
        blue: 'hover:shadow-blue-500/40',
        yellow: 'hover:shadow-yellow-500/40'
    };
    return shadows[color] || shadows.green;
};

const getTextColor = (color: string) => {
    const textColors = {
        green: 'text-green-400',
        teal: 'text-teal-400',
        purple: 'text-purple-400',
        orange: 'text-orange-400',
        pink: 'text-pink-400',
        indigo: 'text-indigo-400',
        cyan: 'text-cyan-400',
        lime: 'text-lime-400',
        emerald: 'text-emerald-400',
        violet: 'text-violet-400',
        rose: 'text-rose-400',
        amber: 'text-amber-400',
        sky: 'text-sky-400',
        fuchsia: 'text-fuchsia-400',
        slate: 'text-slate-400',
        stone: 'text-stone-400',
        red: 'text-red-400',
        blue: 'text-blue-400',
        yellow: 'text-yellow-400'                
    };
    return textColors[color] || textColors.green;
};

const getCheckColor = (color: string) => {
    const checkColors = {
        green: 'bg-green-500',
        teal: 'bg-teal-500',
        purple: 'bg-purple-500',
        orange: 'bg-orange-500',
        pink: 'bg-pink-500',
        indigo: 'bg-indigo-500',
        cyan: 'bg-cyan-500',
        lime: 'bg-lime-500',
        emerald: 'bg-emerald-500',
        violet: 'bg-violet-500',
        rose: 'bg-rose-500',
        amber: 'bg-amber-500',
        sky: 'bg-sky-500',
        fuchsia: 'bg-fuchsia-500',
        slate: 'bg-slate-500',
        stone: 'bg-stone-500',
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        yellow: 'bg-yellow-500'
    };
    return checkColors[color] || checkColors.green;
};

const getRoleBg = (color: string) => {
    const roleBgs = {
        green: 'bg-green-500/20 text-green-400 border-green-500/30',
        teal: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
        purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
        pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
        indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
        cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
        lime: 'bg-lime-500/20 text-lime-400 border-lime-500/30',
        emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        violet: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
        rose: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
        amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        sky: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
        fuchsia: 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30',
        slate: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
        stone: 'bg-stone-500/20 text-stone-400 border-stone-500/30',
        red: 'bg-red-500/20 text-red-400 border-red-500/30',
        blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'        
    };
    return roleBgs[color] || roleBgs.green;
};

const getButtonColor = (color: string) => {
    const buttonColors = {
        green: 'bg-green-600 hover:bg-green-500 border-green-500/50',
        teal: 'bg-teal-600 hover:bg-teal-500 border-teal-500/50',
        purple: 'bg-purple-600 hover:bg-purple-500 border-purple-500/50',
        orange: 'bg-orange-600 hover:bg-orange-500 border-orange-500/50',
        pink: 'bg-pink-600 hover:bg-pink-500 border-pink-500/50',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500/50',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 border-cyan-500/50',
        lime: 'bg-lime-600 hover:bg-lime-500 border-lime-500/50',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 border-emerald-500/50',
        violet: 'bg-violet-600 hover:bg-violet-500 border-violet-500/50',
        rose: 'bg-rose-600 hover:bg-rose-500 border-rose-500/50',
        amber: 'bg-amber-600 hover:bg-amber-500 border-amber-500/50',
        sky: 'bg-sky-600 hover:bg-sky-500 border-sky-500/50',
        fuchsia: 'bg-fuchsia-600 hover:bg-fuchsia-500 border-fuchsia-500/50',
        slate: 'bg-slate-600 hover:bg-slate-500 border-slate-500/50',
        stone: 'bg-stone-600 hover:bg-stone-500 border-stone-500/50',
        red: 'bg-red-600 hover:bg-red-500 border-red-500/50',
        blue: 'bg-blue-600 hover:bg-blue-500 border-blue-500/50',
        yellow: 'bg-yellow-600 hover:bg-yellow-500 border-yellow-500/50'        
    };
    return buttonColors[color] || buttonColors.green;
};

const getHoverBg = (color: string) => {
    const hoverBgs = {
        green: 'from-green-500/10',
        teal: 'from-teal-500/10',
        purple: 'from-purple-500/10',
        orange: 'from-orange-500/10',
        pink: 'from-pink-500/10',
        indigo: 'from-indigo-500/10',
        cyan: 'from-cyan-500/10',
        lime: 'from-lime-500/10',
        emerald: 'from-emerald-500/10',
        violet: 'from-violet-500/10',
        rose: 'from-rose-500/10',
        amber: 'from-amber-500/10',
        sky: 'from-sky-500/10',
        fuchsia: 'from-fuchsia-500/10',
        slate: 'from-slate-500/10',
        stone: 'from-stone-500/10',
        red: 'from-red-500/10',
        blue: 'from-blue-500/10',
        yellow: 'from-yellow-500/10'        
    };
    return hoverBgs[color] || hoverBgs.green;
};

const getAccentColor = (color: string) => {
    const accentColors = {
        green: 'via-green-500',
        teal: 'via-teal-500',
        purple: 'via-purple-500',
        orange: 'via-orange-500',
        pink: 'via-pink-500',
        indigo: 'via-indigo-500',
        cyan: 'via-cyan-500',
        lime: 'via-lime-500',
        emerald: 'via-emerald-500',
        violet: 'via-violet-500',
        rose: 'via-rose-500',
        amber: 'via-amber-500',
        sky: 'via-sky-500',
        fuchsia: 'via-fuchsia-500',
        slate: 'via-slate-500',
        stone: 'via-stone-500',
        red: 'via-red-500',
        blue: 'via-blue-500',
        yellow: 'via-yellow-500'        
    };
    return accentColors[color] || accentColors.green;
};