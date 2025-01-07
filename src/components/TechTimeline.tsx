import React, { useState, useEffect } from 'react';
import { Clock, ArrowUp, ArrowDown, RefreshCcw, Trophy } from 'lucide-react';

interface TechEvent {
    id: number;
    event: string;
    year: number;
    description: string;
    category: 'product' | 'company' | 'language' | 'web';
}

const techEvents: TechEvent[] = [
    {
        id: 1,
        event: "First iPhone Release",
        year: 2007,
        description: "Apple revolutionizes the smartphone industry",
        category: "product"
    },
    {
        id: 2,
        event: "Facebook Launch",
        year: 2004,
        description: "The social network that changed everything",
        category: "company"
    },
    {
        id: 3,
        event: "JavaScript Creation",
        year: 1995,
        description: "Brendan Eich creates JavaScript in 10 days",
        category: "language"
    },
    {
        id: 4,
        event: "World Wide Web Release",
        year: 1991,
        description: "Tim Berners-Lee releases the WWW to the public",
        category: "web"
    },
    {
        id: 5,
        event: "Google Founded",
        year: 1998,
        description: "Larry Page and Sergey Brin found Google, the company that revolutionizes internet search",
        category: "company"
    },
    {
        id: 6,
        event: "First Successful Test of ARPANET",
        year: 1969,
        description: "The precursor to the internet, ARPANET, successfully tests its first communication",
        category: "web"
    },
    {
        id: 7,
        event: "Introduction of the First Apple Macintosh",
        year: 1984,
        description: "Apple introduces the Macintosh, revolutionizing personal computing with a graphical user interface",
        category: "product"
    },
    {
        id: 8,
        event: "Release of Windows 95",
        year: 1995,
        description: "Microsoft releases Windows 95, a major advancement in desktop operating systems",
        category: "product"
    },
    {
        id: 9,
        event: "Amazon Founded",
        year: 1994,
        description: "Jeff Bezos founds Amazon, which would become the largest online retailer in the world",
        category: "company"
    },
    {
        id: 10,
        event: "Bitcoin Whitepaper Published",
        year: 2008,
        description: "The Bitcoin whitepaper is released by Satoshi Nakamoto, outlining the concept of digital currency",
        category: "product"
    },
    {
        id: 11,
        event: "First Digital Camera",
        year: 1975,
        description: "Eastman Kodak engineer Steve Sasson creates the first digital camera",
        category: "product"
    },
    {
        id: 12,
        event: "Launch of IBM PC",
        year: 1981,
        description: "IBM launches its first personal computer, marking a new era for personal computing",
        category: "product"
    },
    {
        id: 13,
        event: "Sony PlayStation Released",
        year: 1994,
        description: "Sony releases the PlayStation, a game console that becomes a significant player in the gaming industry",
        category: "product"
    },
    {
        id: 14,
        event: "First Use of the Term 'Virtual Reality'",
        year: 1987,
        description: "The term 'Virtual Reality' is first used, describing a fully immersive simulated environment",
        category: "language"
    },
    {
        id: 15,
        event: "Intel Releases First Pentium Processor",
        year: 1993,
        description: "Intel releases the first Pentium processor, enhancing personal computer performance",
        category: "product"
    },
    {
        id: 16,
        event: "First Smartphone (IBM Simon)",
        year: 1992,
        description: "The first smartphone, IBM Simon, is introduced, combining a mobile phone with a handheld computer",
        category: "product"
    },
    {
        id: 17,
        event: "Launch of Netflix",
        year: 1997,
        description: "Netflix is founded, initially as a DVD rental service",
        category: "company"
    },
    {
        id: 18,
        event: "Creation of Linux",
        year: 1991,
        description: "Linus Torvalds creates Linux, a free and open-source operating system",
        category: "product"
    },
    {
        id: 19,
        event: "First Consumer LED",
        year: 1962,
        description: "The first practical Light Emitting Diode (LED) is developed, later widely used in displays and lighting",
        category: "product"
    },
    {
        id: 20,
        event: "Launch of the Hubble Space Telescope",
        year: 1990,
        description: "The Hubble Space Telescope is launched, providing unprecedented images of space",
        category: "product"
    },
    {
        id: 21,
        event: "Invention of the Microprocessor",
        year: 1971,
        description: "The first microprocessor, the Intel 4004, is released, paving the way for modern computing",
        category: "product"
    },
    {
        id: 22,
        event: "Introduction of Bluetooth Technology",
        year: 1994,
        description: "Bluetooth technology is introduced, allowing for wireless communication between devices",
        category: "product"
    },
    {
        id: 23,
        event: "Creation of the USB Standard",
        year: 1996,
        description: "The USB standard is introduced, simplifying the connection of peripheral devices to computers",
        category: "product"
    },
    {
        id: 24,
        event: "Release of Mozilla Firefox Browser",
        year: 2004,
        description: "Mozilla releases the Firefox browser, enhancing web browsing with new features like tabbed browsing",
        category: "product"
    },
    {
        id: 25,
        event: "Launch of the World Wide Web",
        year: 1991,
        description: "Tim Berners-Lee launches the first website, marking the public availability of the World Wide Web",
        category: "web"
    },
    {
        id: 26,
        event: "Introduction of Wi-Fi",
        year: 1997,
        description: "Wi-Fi technology is introduced, allowing wireless networking between devices",
        category: "product"
    },
    {
        id: 27,
        event: "First Commercial MP3 Player",
        year: 1998,
        description: "The MPMan, the first commercial MP3 player, is released in Asia",
        category: "product"
    },
    {
        id: 28,
        event: "Release of Google Search Engine",
        year: 1997,
        description: "Google releases its revolutionary search engine to the public",
        category: "product"
    },
    {
        id: 29,
        event: "First BlackBerry Phone",
        year: 1999,
        description: "Research In Motion releases the first BlackBerry phone, offering email on the go",
        category: "product"
    },
    {
        id: 30,
        event: "Introduction of the iPod",
        year: 2001,
        description: "Apple introduces the iPod, revolutionizing the way people listen to music",
        category: "product"
    },
    {
        id: 31,
        event: "Skype Launch",
        year: 2003,
        description: "Skype is launched, offering free voice and video calls over the internet",
        category: "product"
    },
    {
        id: 32,
        event: "YouTube Goes Live",
        year: 2005,
        description: "The video sharing platform YouTube is launched, changing media consumption forever",
        category: "web"
    },
    {
        id: 33,
        event: "Introduction of the Tesla Roadster",
        year: 2008,
        description: "Tesla Motors releases the Roadster, its first electric car, promoting the adoption of electric vehicles",
        category: "product"
    },
    {
        id: 34,
        event: "Launch of WhatsApp",
        year: 2009,
        description: "WhatsApp is launched, quickly becoming the world's most popular messaging app",
        category: "product"
    },
    {
        id: 35,
        event: "First iPad Released",
        year: 2010,
        description: "Apple releases the first iPad, popularizing tablet computing",
        category: "product"
    },
    {
        id: 36,
        event: "Release of Microsoft Azure",
        year: 2010,
        description: "Microsoft launches Azure, its cloud computing service",
        category: "product"
    },
    {
        id: 37,
        event: "Snapchat Introduction",
        year: 2011,
        description: "Snapchat is launched, introducing the concept of self-destructing messages",
        category: "product"
    },
    {
        id: 38,
        event: "First 3D Printed Car",
        year: 2014,
        description: "The first 3D printed car, Strati, is printed and driven in Chicago during a trade show",
        category: "product"
    },
    {
        id: 39,
        event: "Release of Apple Watch",
        year: 2015,
        description: "Apple releases the Apple Watch, popularizing wearable technology",
        category: "product"
    },
    {
        id: 40,
        event: "First Reusable Rocket by SpaceX",
        year: 2015,
        description: "SpaceX successfully lands its Falcon 9 rocket after a launch, marking a significant step towards reusable rockets",
        category: "product"
    },
    {
        id: 41,
        event: "Introduction of USB-C",
        year: 2014,
        description: "USB-C is introduced, offering a reversible plug connector and faster data and power transfer",
        category: "product"
    },
    {
        id: 42,
        event: "First AI Go Victory",
        year: 2016,
        description: "Google's AlphaGo defeats world champion Lee Sedol in the game of Go, a milestone in artificial intelligence",
        category: "product"
    },
    {
        id: 43,
        event: "Release of Pokémon GO",
        year: 2016,
        description: "Pokémon GO is released, becoming one of the most used and profitable mobile apps in 2016",
        category: "product"
    },
    {
        id: 44,
        event: "Launch of Amazon Alexa",
        year: 2014,
        description: "Amazon launches Alexa, its voice-controlled personal assistant",
        category: "product"
    },
    {
        id: 45,
        event: "First Flight of the Falcon Heavy",
        year: 2018,
        description: "SpaceX's Falcon Heavy, the most powerful operational rocket in the world by a factor of two, makes its first flight",
        category: "product"
    },
    {
        id: 46,
        event: "Introduction of Ray Tracing in Gaming",
        year: 2018,
        description: "NVIDIA introduces real-time ray tracing in their RTX series graphics cards, enhancing gaming graphics",
        category: "product"
    },
    {
        id: 47,
        event: "Launch of the Apple M1 Chip",
        year: 2020,
        description: "Apple introduces the M1 chip, its first ARM-based processor for Macs, claiming significant performance and power efficiency improvements",
        category: "product"
    },
    {
        id: 48,
        event: "Introduction of 5G",
        year: 2019,
        description: "The rollout of 5G begins, offering significantly faster internet speeds and new technologies",
        category: "product"
    },
    {
        id: 49,
        event: "Launch of the PlayStation 5",
        year: 2020,
        description: "Sony launches the PlayStation 5, which quickly becomes a bestseller despite global stock shortages",
        category: "product"
    },
    {
        id: 50,
        event: "Introduction of CRISPR Gene Editing",
        year: 2012,
        description: "CRISPR, a revolutionary gene editing technology, is introduced, promising a new era of genetic manipulation",
        category: "product"
    },
    {
        id: 51,
        event: "First Image of a Black Hole",
        year: 2019,
        description: "The first ever image of a black hole is captured by the Event Horizon Telescope, confirming aspects of general relativity",
        category: "product"
    },
    {
        id: 52,
        event: "Launch of the James Webb Space Telescope",
        year: 2021,
        description: "NASA launches the James Webb Space Telescope, set to be the premier observatory of the next decade",
        category: "product"
    },
    {
        id: 53,
        event: "Introduction of Neuralink",
        year: 2016,
        description: "Elon Musk founds Neuralink, a company aimed at developing implantable brain–machine interfaces",
        category: "product"
    },
    {
        id: 54,
        event: "First Autonomous Uber Ride",
        year: 2016,
        description: "Uber launches its first self-driving car service to the public in Pittsburgh",
        category: "product"
    },
    {
        id: 55,
        event: "Launch of Oculus Rift",
        year: 2016,
        description: "Oculus VR releases the Oculus Rift, a virtual reality headset that pioneers mainstream VR technologies",
        category: "product"
    },
    {
        id: 56,
        event: "Introduction of Ethereum",
        year: 2015,
        description: "Ethereum is launched, introducing smart contracts and expanding the capabilities of blockchain technologies",
        category: "product"
    },
    {
        id: 57,
        event: "First Quantum Computer Sold",
        year: 2011,
        description: "D-Wave Systems sells its first commercially available quantum computer, the D-Wave One",
        category: "product"
    },
    {
        id: 58,
        event: "Introduction of the Hyperloop Concept",
        year: 2013,
        description: "Elon Musk publishes a whitepaper detailing the Hyperloop, a high-speed transportation system",
        category: "product"
    },
    {
        id: 59,
        event: "Launch of Raspberry Pi",
        year: 2012,
        description: "The first Raspberry Pi is launched, providing an affordable, credit card-sized computer aimed at promoting the teaching of basic computer science",
        category: "product"
    },
    {
        id: 60,
        event: "First Test Flight of Blue Origin’s New Shepard",
        year: 2015,
        description: "Blue Origin’s New Shepard space vehicle successfully completes its first test flight, marking progress in commercial space travel",
        category: "product"
    },
    {
        id: 61,
        event: "Introduction of the Chromebook",
        year: 2011,
        description: "Google and Acer launch the first Chromebook, a new type of computer that runs Chrome OS",
        category: "product"
    },
    {
        id: 62,
        event: "Launch of the Large Hadron Collider",
        year: 2008,
        description: "The Large Hadron Collider, the world’s largest and most powerful particle collider, is officially inaugurated",
        category: "product"
    },
    {
        id: 63,
        event: "Discovery of the Higgs Boson Particle",
        year: 2012,
        description: "Scientists at CERN discover the Higgs boson, often referred to as the 'God particle,' using the Large Hadron Collider",
        category: "product"
    },
    {
        id: 64,
        event: "Introduction of the Apple M2 Chip",
        year: 2022,
        description: "Apple introduces the M2 chip, continuing the transition to its own silicon with improved performance and efficiency",
        category: "product"
    },
    {
        id: 65,
        event: "Launch of Starlink Internet Service",
        year: 2020,
        description: "SpaceX launches the Starlink Internet service, aiming to provide global broadband coverage",
        category: "product"
    },
    {
        id: 66,
        event: "First Flight of Boeing 787 Dreamliner",
        year: 2009,
        description: "The Boeing 787 Dreamliner, a highly fuel-efficient aircraft, makes its first flight",
        category: "product"
    },
    {
        id: 67,
        event: "Launch of the International Space Station",
        year: 1998,
        description: "The first modules of the International Space Station are launched into space",
        category: "product"
    },
    {
        id: 68,
        event: "Introduction of Google Glass",
        year: 2013,
        description: "Google introduces Google Glass, a wearable technology with an optical head-mounted display",
        category: "product"
    },
    {
        id: 69,
        event: "Launch of the Curiosity Rover",
        year: 2012,
        description: "NASA’s Curiosity rover lands on Mars, beginning its mission to explore the Martian surface",
        category: "product"
    },
    {
        id: 70,
        event: "Introduction of the First 4K Television",
        year: 2012,
        description: "The first 4K television is released, offering a resolution four times that of HD",
        category: "product"
    },
    {
        id: 71,
        event: "Launch of GitHub",
        year: 2008,
        description: "GitHub is launched, providing a platform for software developers to host and review code, manage projects, and build software alongside millions of developers",
        category: "product"
    },
    {
        id: 72,
        event: "First Transatlantic Fiber Optic Cable",
        year: 1988,
        description: "The first transatlantic fiber optic cable, TAT-8, is laid, significantly increasing telecommunications capacity between Europe and North America",
        category: "product"
    },
    {
        id: 73,
        event: "Launch of the Roomba",
        year: 2002,
        description: "iRobot releases the Roomba, an autonomous robotic vacuum cleaner",
        category: "product"
    },
    {
        id: 74,
        event: "First Commercial Drone Delivery",
        year: 2016,
        description: "The first commercial drone delivery is completed by Flirtey, delivering medical supplies in the US",
        category: "product"
    },
    {
        id: 75,
        event: "Introduction of HDR in Televisions",
        year: 2015,
        description: "High Dynamic Range (HDR) is introduced in televisions, improving the quality of video with more colors and better contrast",
        category: "product"
    },
    {
        id: 76,
        event: "Launch of the first electric self-driving truck",
        year: 2019,
        description: "The first electric self-driving truck is launched by Volvo, marking a significant development in autonomous and electric transportation technologies",
        category: "product"
    },
    {
        id: 77,
        event: "First Demonstration of Li-Fi",
        year: 2011,
        description: "Li-Fi, a method of wireless communication using light, is demonstrated for the first time, promising much higher speeds than Wi-Fi",
        category: "product"
    },
    {
        id: 78,
        event: "Introduction of the Oculus Quest",
        year: 2019,
        description: "Oculus introduces the Oculus Quest, a standalone virtual reality headset that does not require a PC to operate",
        category: "product"
    },
    {
        id: 79,
        event: "First Successful Gene Editing in Humans",
        year: 2017,
        description: "The first successful gene editing in humans is performed using CRISPR technology, opening new possibilities for medical treatments",
        category: "product"
    },
    {
        id: 80,
        event: "Launch of the First Smart Thermostat",
        year: 2011,
        description: "The first smart thermostat, Nest Learning Thermostat, is introduced, allowing users to control their home temperature remotely",
        category: "product"
    },
    {
        id: 81,
        event: "First Test of the Hyperloop",
        year: 2017,
        description: "The first full-scale test of the Hyperloop is conducted, demonstrating the potential of this new mode of transportation",
        category: "product"
    },
    {
        id: 82,
        event: "Launch of Google Stadia",
        year: 2019,
        description: "Google launches Stadia, a cloud gaming service that allows streaming video games without the need for a console",
        category: "product"
    },
    {
        id: 83,
        event: "Introduction of the Apple Silicon M1 Pro and M1 Max",
        year: 2021,
        description: "Apple introduces the M1 Pro and M1 Max, further advancing its own silicon with more power and efficiency for professional users",
        category: "product"
    },
    {
        id: 84,
        event: "First Flight of the SpaceX Crew Dragon",
        year: 2020,
        description: "SpaceX's Crew Dragon successfully completes its first manned flight, marking a new era of commercial spaceflight",
        category: "product"
    },
    {
        id: 85,
        event: "Launch of Google Photos",
        year: 2015,
        description: "Google launches Google Photos, offering free, unlimited photo and video storage",
        category: "product"
    },
    {
        id: 86,
        event: "First Flight of an Electric Aircraft",
        year: 2016,
        description: "The first flight of a fully electric aircraft takes place, marking a significant step towards sustainable aviation",
        category: "product"
    },
    {
        id: 87,
        event: "Introduction of Augmented Reality in Mobile Devices",
        year: 2017,
        description: "Augmented reality is introduced in mobile devices with significant capabilities, enhancing real-world experiences through digital information",
        category: "product"
    },
    {
        id: 88,
        event: "Launch of Amazon Echo",
        year: 2014,
        description: "Amazon introduces the Echo, a smart speaker that integrates the voice-controlled assistant Alexa",
        category: "product"
    },
    {
        id: 89,
        event: "First Commercial Use of 3D Printing in Medicine",
        year: 2013,
        description: "The first commercial use of 3D printing in medicine occurs, creating customized prosthetics for patients",
        category: "product"
    },
    {
        id: 90,
        event: "Launch of the Mars Rover Perseverance",
        year: 2020,
        description: "NASA launches the Mars Rover Perseverance, aimed at exploring the Martian surface and seeking signs of past life",
        category: "product"
    },
    {
        id: 91,
        event: "Introduction of 8K Television",
        year: 2018,
        description: "The first 8K television is introduced, offering resolutions four times that of 4K",
        category: "product"
    },
    {
        id: 92,
        event: "First Successful Test of a Solar Sail in Space",
        year: 2010,
        description: "The first successful test of a solar sail in space is conducted by Japan's IKAROS spacecraft, demonstrating a novel method of propulsion",
        category: "product"
    },
    {
        id: 93,
        event: "Introduction of Google Assistant",
        year: 2016,
        description: "Google introduces Google Assistant, a virtual assistant powered by artificial intelligence and machine learning",
        category: "product"
    },
    {
        id: 94,
        event: "First Public Demonstration of a Flying Car",
        year: 2017,
        description: "The first public demonstration of a flying car takes place, showcasing a vehicle that can convert between driving and flying modes",
        category: "product"
    },
    {
        id: 95,
        event: "Launch of the First Foldable Smartphone",
        year: 2019,
        description: "The first foldable smartphone is launched, featuring a flexible display that can be folded in half",
        category: "product"
    },
    {
        id: 96,
        event: "Introduction of LiDAR in Consumer Smartphones",
        year: 2020,
        description: "LiDAR technology is introduced in consumer smartphones, enhancing augmented reality experiences and improving camera autofocus",
        category: "product"
    },
    {
        id: 97,
        event: "First Commercial Deployment of Robotic Surgery",
        year: 2000,
        description: "The first commercial deployment of robotic surgery takes place, enhancing precision in surgical procedures",
        category: "product"
    },
    {
        id: 98,
        event: "Launch of Apple Pay",
        year: 2014,
        description: "Apple launches Apple Pay, a mobile payment and digital wallet service that transforms mobile payments with an easy, secure, and private way to pay",
        category: "product"
    },
    {
        id: 99,
        event: "First Test of Autonomous Trucks on Public Roads",
        year: 2016,
        description: "The first test of autonomous trucks on public roads is conducted, signaling a shift towards automation in logistics",
        category: "product"
    },
    {
        id: 100,
        event: "Introduction of Artificial Intelligence in Public Security Cameras",
        year: 2018,
        description: "Artificial intelligence is introduced in public security cameras, enhancing public safety with real-time, automated threat detection",
        category: "product"
    }
];

const TechTimeline: React.FC = () => {
    const [currentEvent, setCurrentEvent] = useState<TechEvent | null>(null);
    const [guess, setGuess] = useState<number>(new Date().getFullYear());
    const [pastGuesses, setPastGuesses] = useState<{ year: number; feedback: string }[]>([]);
    const [attempts, setAttempts] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
    const [feedback, setFeedback] = useState<string | null>(null);
    const MAX_ATTEMPTS = 5;

    useEffect(() => {
        resetGame();
    }, []);

    const checkGuess = () => {
        if (!currentEvent || gameStatus !== 'playing') return;

        const guessYear = guess;
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        const distance = Math.abs(guessYear - currentEvent.year);
        const hint = distance > 10 ? '❄️' : distance > 3 ? '🌡️' : '🔥';

        let feedbackMessage = guessYear < currentEvent.year ? `⬆️ (${hint})` : `⬇️ (${hint})`;
        if (guessYear === currentEvent.year) {
            feedbackMessage = '🎯 Correct!';
            setGameStatus('won');
        } else if (newAttempts >= MAX_ATTEMPTS) {
            setGameStatus('lost');
        }

        setFeedback(feedbackMessage);
        setPastGuesses([{ year: guessYear, feedback: feedbackMessage }, ...pastGuesses]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        checkGuess();
    };

    const resetGame = () => {
        const randomEvent = techEvents[Math.floor(Math.random() * techEvents.length)];
        setCurrentEvent(randomEvent);
        setGuess(new Date().getFullYear());
        setAttempts(0);
        setPastGuesses([]);
        setGameStatus('playing');
        setFeedback(null);
    };

    return (
        <div className="min-h-screen flex items-center py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">TechTimeline</h2>
                        <p className="text-xl text-gray-400">
                            Guess the year of important tech events. You have {MAX_ATTEMPTS} attempts!
                        </p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700">
                        {currentEvent && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <span className="inline-block bg-violet-600/20 text-violet-400 px-3 py-1 rounded-full text-sm">
                                        {currentEvent.category.toUpperCase()}
                                    </span>
                                    <h3 className="text-2xl font-bold mt-4 mb-2">{currentEvent.event}</h3>
                                    <p className="text-gray-400">{currentEvent.description}</p>
                                </div>

                                {gameStatus === 'playing' && (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2">
                                                Slide to the year:
                                            </label>
                                            <input
                                                type="range"
                                                id="year"
                                                min="1900"
                                                max={new Date().getFullYear()}
                                                value={guess}
                                                onChange={(e) => setGuess(parseInt(e.target.value))}
                                                className="w-full"
                                            />
                                            <div className="text-center text-white">{guess}</div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Clock className="w-5 h-5" />
                                            Submit Guess
                                        </button>
                                    </form>
                                )}

                                {feedback && gameStatus === 'playing' && (
                                    <div className="flex items-center justify-center gap-2 text-lg text-blue-400">
                                        {feedback}
                                    </div>
                                )}

                                {gameStatus !== 'playing' && (
                                    <div className="text-center space-y-4">
                                        {gameStatus === 'won' ? (
                                            <div className="text-green-400">
                                                <Trophy className="inline w-6 h-6 mr-2" />
                                                Congratulations! You got it in {attempts} attempts!
                                            </div>
                                        ) : (
                                            <div className="text-red-400">
                                                Game Over! The correct year was {currentEvent.year}.
                                            </div>
                                        )}

                                        <button
                                            onClick={resetGame}
                                            className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2 mx-auto"
                                        >
                                            <RefreshCcw className="w-4 h-4" />
                                            Play Again
                                        </button>
                                    </div>
                                )}

                                <div className="text-center text-gray-400">
                                    Attempts: {attempts}/{MAX_ATTEMPTS}
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-white mb-2">Past Guesses:</h4>
                                    <div className="flex flex-col-reverse">
                                        {pastGuesses.map((g, index) => (
                                            <div key={index} className="text-white">
                                                {g.year}: {g.feedback}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechTimeline;
