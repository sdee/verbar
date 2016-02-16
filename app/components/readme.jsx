React = require("react"),
    ReactBootstrap = require("react-bootstrap");

var Readme = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <ReactBootstrap.Panel>
                <h2>About</h2>
                <ReactBootstrap.Accordion defaultActiveKey="1">
                    <ReactBootstrap.Panel header="Concept" eventKey="1">
                        <p>This app ensures that you get enough practice with your verbs. The app automatically generates flashcards to give you practice with many diverse combinations of pronouns, tenses, and verbs. The best way to learn verb endings is not to memorize conjugation tables but instead to practice conjugating the verbs in real time as you would in a conversation.</p>
                    </ReactBootstrap.Panel>
                    <ReactBootstrap.Panel header="Key difference" eventKey="2">
                        <p>Workbooks and other apps feature curated excersises which is good for certain kinds of skills, but often they are limited in the sheer amount of practice they provide. For example, Duolingo will introduce a new tense and you'll get at best a dozen of practice questions for that tense. Even with a workbook focused on verbs, I sometimes did not feel like I had enough practice. Since verbar generates questions combinatorally by combining verbs, tenses, and pronouns, you never run out of practice.</p>
                        <p>Don't let the many tenses in Spanish intimidate you or limit you to what you can say in your new favorite language. Verbar is ideal for expanding your knowledge of tenses and improving your speed. </p>
                        <p>The best part of this app is that it allows you to customize your practice session. You can use the app to focus on weak spots, help you keep up with a class or other tool, or to help improve your speed. You can select the tenses you want to include and whether you're ready to tackle irregulars. You only need to practice 'vosotros' if you're practicing for a trip to Spain.</p>
                    </ReactBootstrap.Panel>
                    <ReactBootstrap.Panel header="Story" eventKey="3">
                         <p>This tool is built around my personal learning style so it might not be ideal for everyone. I quit my software job and started to travel the world to learn about food. I started in Peru and quickly realized how important expanding my language skill was to understanding the rich stories people were telling me.</p>
                        <p>In the second part of my trip, I found myself on the other side of the world in Thailand where I couldn't find any Spanish classes to continue my studies. I often tackle challenges like learning a language by trying to identify the hardest part and addressing that head-on. I realized that the number of tenses in Spanish can be intimidating, made more complex by the unfamiliar concepts like the subjunctive tense.</p>
                        <p>I set out to write this app and wrote the first version in two weeks while bouncing around various co-working spaces in Chiang Mai.</p>
                    </ReactBootstrap.Panel>
                    <ReactBootstrap.Panel header="Code" eventKey="4">
                    <p>This app was written partially as as way for me to familiarize myself with React. I used Fluxxor to implement the Flux architectural pattern. The layout is powered by Twitter Bootstrap and the React Bootstrap library</p><p>For the conjugations, I rely heavily this <a href="https://github.com/voldmar/conjugation">library</a> by Github user, voldmar (which is based on Pythoñol). I used Flask to wrap the conjugation library into a nice api.</p>
                    <p>All of the code for this app can be found on <a href="https://github.com/voldmar/conjugation">github</a></p>
                    </ReactBootstrap.Panel>
                </ReactBootstrap.Accordion>
            </ReactBootstrap.Panel>
        );
    }
});

module.exports = Readme;
