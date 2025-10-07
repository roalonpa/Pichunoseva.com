import { FaPython } from 'react-icons/fa'

export default function Python() {
    return (
        <>
            <h1 className="container-title">Pichu's retirement impact in her language</h1>
            <div className="python-div">
                <div className='python-header'>
                    <FaPython size={55} className='python-icon'/>
                    <p className='python-task'>Create a function that evaluates the impact that Pia's retirement will have on a list of students and returns their happiness. Print their total happiness or sadness depending on whether the teacher retires or not.</p>
                </div>
                <p className="python-text">
                    students = ["Rochi", "Delfi", "Cami", "Mia", "Luli", "Jaz", "..."] <br />
                    <br />
                    <span style={{ color: 'rgba(204, 0, 255, 1)' }}>def</span> <span style={{ color: 'deepskyblue' }}>teachers_impact</span> (students): <br />
                    &emsp;&emsp;happiness = <span style={{ color: 'deepskyblue' }}>0</span> <br />
                    &emsp;&emsp;<span style={{ color: 'rgba(204, 0, 255, 1)' }}>for</span> student <span style={{ color: 'rgba(204, 0, 255, 1)' }}>in</span> students: <br />
                    &emsp;&emsp;&emsp;&emsp; happiness = happiness + <span style={{ color: 'deepskyblue' }}>1000</span> <br />
                    &emsp;&emsp;<span style={{ color: 'rgba(204, 0, 255, 1)' }}>return</span> happiness <br />
                    <br />
                    total_happiness = teachers_impact(students) <br />
                    <br />
                    <span style={{ color: 'rgba(204, 0, 255, 1)' }}>if</span> Retirement: <br />
                    &emsp;&emsp; sadness = total_happiness * <span style={{ color: 'deepskyblue' }}>1000</span> <br />
                    &emsp;&emsp; <span style={{ color: 'rgba(204, 0, 255, 1)' }}>print</span>(<span style={{ color: 'lightsalmon' }}>"sadness: "</span>, sadness)  # Output: 24000000+ <br />
                    <span style={{ color: 'rgba(204, 0, 255, 1)' }}>else</span>: <br />
                    &emsp;&emsp; <span style={{ color: 'rgba(204, 0, 255, 1)' }}>print</span>(<span style={{ color: 'lightsalmon' }}>"total_happiness: "</span>, total_happiness)  # Output: 24000+
                </p>
            </div>
        </>
    )
}