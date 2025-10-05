import { useState, useEffect } from 'react';

export default function EligeTuAventura() {

    const [messageState, setMessageState] = useState(() => {return 'Are you ready to begin the journey?'});
    const [choicesState, setChoicesState] = useState(() => {return ['Yes']});
    const [turnState, setTurnState] = useState(() => {return 1})
    const [resultState, setResultState] = useState(null)


    function handleChoice(choice) {
        if (turnState === 0) {
            setMessageState('Are you ready to begin the journey?')
            setChoicesState(['Yes'])
            setResultState(null)
            setTurnState(1)
        }
        if (turnState === 1) {
            setMessageState('You have already packed your suitcase. You are waiting for the taxi that will take you to the port, but the app shows that it has been delayed 2 hours.')
            setChoicesState(["Wait for it", "Walk to the bus stop on 'la 26'"])
            setTurnState(2)
        }
        if (turnState === 2) {
            if (choice === 'Wait for it') {
                setMessageState('It never arrived and you missed the cruise')
                setChoicesState(['Start over'])
                setTurnState(0)
            } else {
                setMessageState('You arrive at the bus stop. While waiting, you see a school across the street that catches your attention.')
                setChoicesState(['Cross the street and investigate', 'Keep waiting for the bus'])
                setTurnState(3)
            }
        }
        if (turnState === 3) {
            if (choice === 'Cross the street and investigate') {
                setMessageState('You enter the school and meet someone named Matilde, who tells you she is the director of that school and that they are looking for a new programming teacher. She offers you the job and says you can start tomorrow. What you love most in the world is teaching, and you cannot pass up this opportunity, although you know that if you accept it, you will not be able to go on your trip.')
                setChoicesState(['Accept the offer', 'Decline the offer'])
                setTurnState(4)
            } else {
                setMessageState('The bus never arrives and you missed the cruise')
                setChoicesState(['Start over'])
                setTurnState(0)
            }
        }
        if (turnState === 4) {
            if (choice === 'Accept the offer') {
                setMessageState("You meet the other teachers, and they tell you that 4th B is the worst class, as they behave very badly. They tell you that their classroom always smells very badly because of the boys who play football during break, that they talk too much, do not pay attention when the teacher explains, and are very noisy. After the talking with the teachers, you go to Matilde's office so that she can tell you which classes you've got. She tells you that you've got 3rd A and B, 4th A and B and some hours with 5th. When she tells you that you will have 4th B, you remember what the teachers told you a moment ago.")
                setChoicesState(['Give 4th B a chance', 'Ask Matilde to give you different classes'])
                setTurnState(5)
            } else {
                setMessageState('You decide to go back to the bus stop and keep waiting, but it never arrives and you missed the cruise')
                setChoicesState(['Start over'])
                setTurnState(0)
            }
        }
        if (turnState === 5) {
            if (choice === 'Give 4th B a chance') {
                setMessageState("You get to know them and realize that they are all very intelligent and are amazing. You realize that what the teachers told you is not true, and that they are the funniest students you've ever met in your life. The students ask you to be their tutor, since they really liked you.")
                setChoicesState(['Accept being their tutor', 'Decline being their tutor'])
                setTurnState(6)
            } else {
                setMessageState('They change 4th B for more hours with 5th. At that moment you did not know it, but that was going to be the worst mistake you have ever made. 5th was not as fun as 4th. You were not motivated to continue teaching, so you decide not to be a teacher anymore. Since you had now lost your cruise, you decide to buy another ticket and start the whole journey over again.')
                setChoicesState(['Start over'])
                setTurnState(0)
            }
        }
        if (turnState === 6) {
            if (choice === 'Accept being their tutor') {
                setMessageState('Little by little you form a very close relationship with your students, and they become very fond of you. You take a trip to Santa Fe together, where you manage to strengthen your relationship and have a lot of fun. You realize that no other class is as fun as 4th B, and that it is your favorite class by far. Despite everything, you had planned to retire the following year. When you mention this to your students, they ask you please not to leave. For them you are the best teacher they have had in their lives, and they ask you to stay.')
                setChoicesState(['Retire to travel the world', 'Not retire and stay with them until they finish high school'])
                setTurnState(7)
            } else {
                setMessageState('The students feel very sad because you did not accept being their tutor. They begin to misbehave in class, and you feel very frustrated because you cannot do anything to make them behave better. You decide not to be a teacher anymore. Since you had now lost your cruise, you decide to buy another ticket and start the whole journey over again.')
                setChoicesState(['Start over'])
                setTurnState(0)
            }
        }
        if (turnState === 7) {
            if (choice === 'Not retire and stay with them until they finish high school') {
                setMessageState('Your students are very happy and so are you. They love you so much that they decide to give you a gift. They buy tickets to go on a cruise all together to travel the world. You love cruises, and that was always your dream. You accept the gift and go on a trip with them. You are happy forever.')
                setResultState('You Won!')
                setChoicesState(['Start over'])
                setTurnState(0)
            } else {
                setMessageState('You travel all over the world and see many new places, but eventually you realize that it is not the same without the 4th students and you regret your decision. You decide to return to school, but it is too late. They have already finished high school, you will never see them again.')
                setResultState('You Lost')
                setChoicesState(['Start over'])
                setTurnState(0)
            }
        }
    }

    return (
        <>
            <h1 className="container-title">Choose Your Own Adventure</h1>
            <p className='message'>{messageState}</p>
            {resultState && <h1 className='result'>{resultState}</h1>}
            <div className='choices'>
            {choicesState.map((choice, index) => {
                return <button key={index} onClick={() => handleChoice(choice)} className='choice'>{choice}</button>
            })}
            </div>
        </>
    );
}
