import { UserPlus, Lightbulb, Clock, Send, Trophy, Code, FileText, Medal } from 'lucide-react';

const Timeline = () => {
    return (
        <>
            <section id="timeline" className="relative py-20 px-4 overflow-hidden transition-all duration-700 ease-in-out">
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/drr3xypxn/image/upload/v1755089315/3_a3nsse.png"
                        alt="Timeline Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay for better content readability */}
                    <div className="absolute inset-0 bg-black/70"></div>
                    {/* Gradient overlay for theme consistency */}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-transparent to-accent/15"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 md:mb-16 demon-text drop-shadow-2xl flex flex-col items-center">
                        Event Timeline
                        <div className="text-sm md:text-base mt-1 text-gray-300" style={{ fontSize: '0.8em' }}>イベントタイムライン</div>
                    </h2>

                    <div className="relative">
                        {/* Timeline line - responsive positioning */}
                        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 shadow-lg"></div>

                        <div className="space-y-12 md:space-y-16">
                            {/* Registration starts */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-blue-400/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            SEP<br />1
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-black mb-2 drop-shadow-lg">Registration starts</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed">The Race Begins — Register. Team Up. Get Set to Hack!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-blue-400/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            SEP<br />1
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-black mb-2 drop-shadow-lg">Registration starts</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed">The Race Begins — Register. Team Up. Get Set to Hack!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <UserPlus className="w-4 h-4 text-white" />
                                </div>
                                <div className="hidden md:block md:flex-1 md:pl-8"></div>
                            </div>

                            {/* Idea submissions start */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-pink-400/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            SEP<br />20
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-black mb-2 drop-shadow-lg">Idea submissions start</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed">Time to Spark Ideas — Let the Innovation Flow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-pink-400/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            SEP<br />20
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-black mb-2 drop-shadow-lg">Idea submissions start</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed">Time to Spark Ideas — Let the Innovation Flow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-pink-400 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Lightbulb className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Registration Deadline */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-purple-500/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            OCT<br />1
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Registration Deadline</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">Last Call to Enter the Code Slayer!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-purple-500/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            OCT<br />1
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Registration Deadline</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">Last Call to Enter the Code Slayer!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Clock className="w-4 h-4 text-white" />
                                </div>
                                <div className="hidden md:block md:flex-1 md:pl-8"></div>
                            </div>

                            {/* Idea Submission Deadline */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-yellow-400/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            OCT<br />5
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-black mb-2 drop-shadow-lg">Idea Submission Deadline</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed">Ideas Lock In — Let the Best Concepts Win!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-yellow-400/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            OCT<br />5
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-black mb-2 drop-shadow-lg">Idea Submission Deadline</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed">Ideas Lock In — Let the Best Concepts Win!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Send className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Shortlisted Teams Announcement */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-green-500/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            OCT<br />15
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Shortlisted Teams Announcement</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">And the Chosen Ones Are... Meet the Finalists!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-green-500/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            OCT<br />15
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Shortlisted Teams Announcement</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">And the Chosen Ones Are... Meet the Finalists!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Trophy className="w-4 h-4 text-white" />
                                </div>
                                <div className="hidden md:block md:flex-1 md:pl-8"></div>
                            </div>

                            {/* Hacking Period Starts */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-red-500/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            NOV<br />1
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Hacking Period Starts</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">The Code War Begins — Hack Like There's No Tomorrow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-red-500/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            NOV<br />1
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Hacking Period Starts</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">The Code War Begins — Hack Like There's No Tomorrow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Code className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Final Submission */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-orange-500/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Final Submission</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">One Last Push — Deliver Your Innovation!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-orange-500/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Final Submission</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">One Last Push — Deliver Your Innovation!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <FileText className="w-4 h-4 text-white" />
                                </div>
                                <div className="hidden md:block md:flex-1 md:pl-8"></div>
                            </div>

                            {/* Final Evaluation Result */}
                            <div className="relative flex items-center">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-indigo-500/90 backdrop-blur-md p-3 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 relative overflow-hidden">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Final Evaluation Result</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">The Verdict is In — Witness the Best Rise!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-indigo-500/90 backdrop-blur-md p-4 rounded-lg border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 relative overflow-hidden max-w-sm w-full">
                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-12">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Final Evaluation Result</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">The Verdict is In — Witness the Best Rise!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Medal className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
