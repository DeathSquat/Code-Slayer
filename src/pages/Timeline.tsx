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
                    <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 md:mb-16 demon-text drop-shadow-2xl flex flex-col items-center transform hover:scale-105 transition-all duration-500 group">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                            Event Timeline
                        </span>
                        <div className="text-sm md:text-base mt-1 text-gray-300 group-hover:text-white transition-colors duration-300" style={{ fontSize: '0.8em' }}>イベントタイムライン</div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s' }}></div>
                        <div className="absolute -top-2 -right-6 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute -bottom-2 left-8 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
                    </h2>

                    <div className="relative">
                        {/* Timeline line - responsive positioning with enhanced effects */}
                        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 shadow-lg animate-pulse">
                            {/* Glowing effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 blur-sm opacity-50"></div>
                        </div>                        <div className="space-y-12 md:space-y-16">
                            {/* Registration starts */}
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-blue-400/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300/20 before:to-blue-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            SEP<br />1
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-black mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Registration starts</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-black">The Race Begins — Register. Team Up. Get Set to Hack!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-blue-400/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300/20 before:to-blue-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            SEP<br />1
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-black mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Registration starts</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-black">The Race Begins — Register. Team Up. Get Set to Hack!</p>
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
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-pink-400/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-pink-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-300/20 before:to-pink-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-3 right-6 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="absolute top-7 right-10 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
                                        <div className="absolute bottom-5 left-6 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            SEP<br />20
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-black mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Idea submissions start</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-black">Time to Spark Ideas — Let the Innovation Flow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-pink-400/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-pink-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-300/20 before:to-pink-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-3 right-6 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="absolute top-7 right-10 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
                                        <div className="absolute bottom-5 left-6 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            SEP<br />20
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-black mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Idea submissions start</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-black">Time to Spark Ideas — Let the Innovation Flow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-pink-400 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Lightbulb className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Registration Deadline */}
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-purple-500/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-300/20 before:to-purple-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            OCT<br />1
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Registration Deadline</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">Last Call to Enter the Code Slayer!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-purple-500/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-300/20 before:to-purple-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            OCT<br />1
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Registration Deadline</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">Last Call to Enter the Code Slayer!</p>
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
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-yellow-400/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-yellow-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-300/20 before:to-yellow-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 right-4 w-1 h-1 bg-black/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="absolute top-6 right-8 w-1 h-1 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
                                        <div className="absolute bottom-6 left-16 w-1 h-1 bg-black/50 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            OCT<br />5
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-black mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Idea Submission Deadline</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-black">Ideas Lock In — Let the Best Concepts Win!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-yellow-400/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-yellow-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-300/20 before:to-yellow-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 right-4 w-1 h-1 bg-black/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="absolute top-6 right-8 w-1 h-1 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
                                        <div className="absolute bottom-6 left-16 w-1 h-1 bg-black/50 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            OCT<br />5
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-black mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Idea Submission Deadline</h3>
                                            <p className="text-black/80 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-black">Ideas Lock In — Let the Best Concepts Win!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Send className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Shortlisted Teams Announcement */}
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-green-500/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-green-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300/20 before:to-green-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.3s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            OCT<br />15
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Shortlisted Teams Announcement</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">And the Chosen Ones Are... Meet the Finalists!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-green-500/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-green-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300/20 before:to-green-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.3s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            OCT<br />15
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Shortlisted Teams Announcement</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">And the Chosen Ones Are... Meet the Finalists!</p>
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
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-red-500/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-300/20 before:to-red-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 right-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                                        <div className="absolute bottom-6 left-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.4s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            NOV<br />1
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Hacking Period Starts</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">The Code War Begins — Hack Like There's No Tomorrow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-red-500/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-300/20 before:to-red-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 right-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                                        <div className="absolute bottom-6 left-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.4s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            NOV<br />1
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Hacking Period Starts</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">The Code War Begins — Hack Like There's No Tomorrow!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot - responsive positioning */}
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white z-10 shadow-lg flex items-center justify-center">
                                    <Code className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Final Submission */}
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-orange-500/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-orange-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-300/20 before:to-orange-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.0s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Final Submission</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">One Last Push — Deliver Your Innovation!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex md:flex-1 md:pr-8 md:text-right md:justify-end">
                                    <div className="bg-orange-500/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-orange-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-300/20 before:to-orange-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute top-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.0s' }}></div>
                                        <div className="absolute bottom-6 right-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Final Submission</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">One Last Push — Deliver Your Innovation!</p>
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
                            <div className="relative flex items-center group">
                                {/* Mobile Layout */}
                                <div className="block md:hidden w-full pl-12">
                                    <div className="bg-indigo-500/90 backdrop-blur-md p-3 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-indigo-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-300/20 before:to-indigo-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 right-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                                        <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.1s' }}></div>
                                        <div className="absolute bottom-6 left-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.6s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-10 relative z-10">
                                            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Final Evaluation Result</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">The Verdict is In — Witness the Best Rise!</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:block md:flex-1 md:pr-8"></div>
                                <div className="hidden md:flex md:flex-1 md:pl-8 md:justify-start">
                                    <div className="bg-indigo-500/90 backdrop-blur-md p-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:-rotate-1 transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-indigo-500/50 relative overflow-hidden max-w-sm w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-300/20 before:to-indigo-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                                        {/* Animated glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        {/* Decorative border pattern */}
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)`
                                        }}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute top-4 right-4 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                                        <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.1s' }}></div>
                                        <div className="absolute bottom-6 left-16 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.6s' }}></div>

                                        <div className="absolute top-2 right-2 bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-bold leading-tight shadow-lg transform hover:scale-110 transition-transform duration-200">
                                            NOV<br />2
                                        </div>
                                        <div className="pr-12 relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Final Evaluation Result</h3>
                                            <p className="text-white/90 font-medium text-sm leading-relaxed transform transition-all duration-300 hover:text-white">The Verdict is In — Witness the Best Rise!</p>
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
