import React from 'react';

const AboutUs: React.FC = () => {

    return (
        <section className="flex flex-col items-center justify-center py-16 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Meet the Rebels Behind the Sound</h1>
                <p className="text-lg mb-12">
                    We are a band born from the streets, forged by the fires of rebellion, and driven by a pure desire to disrupt the norm. 
                    Our music is raw, loud, and unapologetically in your face—just the way we like it. We dont just make music; we stir the 
                    primal instincts, unearthing the rebel in every listener who dares to tune in. Welcome to the chaos, where the amps are 
                    always cranked, and conformity doesnt stand a chance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">Ilia</h2>
                        <p className="text-lg">Main Vocals & Guitar 2</p>
                        <p className="mt-4">Ilia is the voice that sets the rebellion in motion. Armed with a guitar and vocals that tear through the noise, 
                        they lead the charge. Ilia’s raspy, raw power resonates with the chaos of the world, channeling the angst, frustration, 
                        and raw energy that punk has always thrived on.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">Raphaël</h2>
                        <p className="text-lg">Lead Guitar & Backup Vocals</p>
                        <p className="mt-4">Raphaël’s riffs cut through the air like a chainsaw through steel. He brings a fiery edge to the band, weaving 
                        intricate melodies into the rawness of their sound. His guitar is the spark that ignites every track, while his backing vocals 
                        are the anthem of revolution.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">Victor</h2>
                        <p className="text-lg">Drums & Backup Vocals</p>
                        <p className="mt-4">Victor is the heartbeat of the band—relentless, unpredictable, and impossible to ignore. His drumming is a 
                        war cry that fuels the rebellion, shaking walls and cracking foundations. His backing vocals add another layer of energy, 
                        punching through with fierce conviction.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">Antoine</h2>
                        <p className="text-lg">Bass & Backup Vocals</p>
                        <p className="mt-4">Antoine’s bass lines lay the groundwork, rumbling beneath the chaos with a groove that’s as heavy as it is 
                        rebellious. His deep, pulsating rhythms resonate through your bones, keeping you grounded while the world around 
                        you spirals into a frenzy. His backup vocals add an unexpected depth to the sound.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
