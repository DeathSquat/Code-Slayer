import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useState } from "react";

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
        linkedin: "https://www.linkedin.com/in/arabhay-agrawal-891013372",
        image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755088224/Arabhay_Agrawal_xlcfcf.jpg",
        role: <>Founder</>,
        color: "teal"
    },
    {
        name: "Nitin Sengar",
        linkedin: "https://www.linkedin.com/in/contactnitinsengar/",
        image: "https://res.cloudinary.com/drr3xypxn/image/upload/v1755088228/Nitin_Sengar_bnxbte.jpg",
        role: <>Community Manager</>,
        color: "green"
    }
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
                {/* Members Grid */}
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 justify-center">
                    {getMembers().map((member, index) => (
                        <div key={index} className="group relative perspective-1000">
                            <div className="relative w-full h-[400px] transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105">
                                {/* Outer Glow */}
                                <div className={`absolute -inset-4 bg-gradient-to-r ${member.color === 'green' ? 'from-green-500/30 via-emerald-500/40 to-green-500/30' : 'from-teal-500/30 via-cyan-500/40 to-teal-500/30'} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}></div>
                                {/* Border Glow */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${member.color === 'green' ? 'from-green-500 via-emerald-500 to-green-500' : 'from-teal-500 via-cyan-500 to-teal-500'} rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
                                {/* Main Card */}
                                <Card className={`relative w-full h-full bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border ${member.color === 'green' ? 'border-green-500/50 hover:border-green-400/90' : 'border-teal-500/50 hover:border-teal-400/90'} rounded-xl overflow-hidden transition-all duration-500 shadow-2xl ${member.color === 'green' ? 'hover:shadow-green-500/40' : 'hover:shadow-teal-500/40'}`}>
                                  <div className="relative p-8 h-full flex flex-col items-center text-center transform group-hover:-translate-y-3 transition-transform duration-500">
                                    {/* Profile Image */}
                                    <div className="relative mb-6 transform group-hover:scale-110 transition-all duration-500">
                                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-top" />
                                      </div>
                                      <div className={`absolute -bottom-2 -right-2 w-10 h-10 ${member.color === 'green' ? 'bg-green-500' : 'bg-teal-500'} rounded-full flex items-center justify-center shadow-lg`}>
                                        <span className="text-white text-sm font-bold">✓</span>
                                      </div>
                                    </div>
                                    {/* Name */}
                                    <h3 className={`text-2xl font-bold mb-2 ${member.color === 'green' ? 'text-green-400' : 'text-teal-400'} group-hover:text-white transition-colors duration-300 drop-shadow-lg`}>
                                      {member.name}
                                    </h3>
                                    {/* Role Badge */}
                                    <div className="mb-6">
                                      <span className={`${member.color === 'green' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-teal-500/20 text-teal-400 border-teal-500/30'} px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border`}>
                                        {member.role}
                                      </span>
                                    </div>
                                    {/* LinkedIn Button */}
                                    <div className="mt-auto">
                                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`group/btn inline-flex items-center px-6 py-3 ${member.color === 'green' ? 'bg-green-600 hover:bg-green-500 border-green-500/50' : 'bg-teal-600 hover:bg-teal-500 border-teal-500/50'} text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border cursor-pointer no-underline`}>
                                        <Linkedin className="mr-2 h-5 w-5 drop-shadow-lg group-hover/btn:scale-110 transition-transform duration-300" />
                                        <span className="font-medium drop-shadow-md">Connect</span>
                                      </a>
                                    </div>
                                  </div>
                                  {/* Animated Elements */}
                                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color === 'green' ? 'from-green-500/10' : 'from-teal-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${member.color === 'green' ? 'via-green-500' : 'via-teal-500'} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                                  {/* Corner Accents */}
                                  <div className={`absolute top-4 right-4 w-2 h-2 ${member.color === 'green' ? 'bg-green-500' : 'bg-teal-500'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                  <div className={`absolute bottom-4 left-4 w-2 h-2 ${member.color === 'green' ? 'bg-green-500' : 'bg-teal-500'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                </Card>
                              </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    );
};

export default Team;
