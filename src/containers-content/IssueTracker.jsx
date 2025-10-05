
export default function IssueTracker() {

    const features = [
        {
            id: 0,
            priority: 'Medium',
            title: 'Access Databases explanation',
            description: 'PW1 and PW3: Access databases, create and manage tables, queries, reports and relational databases.',
            progress: 100,
        },
        {
            id: 1,
            priority: 'Medium',
            title: 'Python loops explanation',
            description: 'Explanation of for and while loops in Python.',
            progress: 100,
        },
        {
            id: 2,
            priority: 'Medium',
            title: 'Python conditionals explanation',
            description: 'Explanation of if and else statements in Python.',
            progress: 100,
        },
        {
            id: 3,
            priority: 'High',
            title: 'Python functions explanation',
            description: 'Explanation of how to define a function and set its parameters in Python.',
            progress: 80,
        },
        {
            id: 4,
            priority: 'Medium',
            title: 'Python dictionaries explanation',
            description: 'Explanation of how to use dictionaries in Python (Rochi and Delfi are so smart that have already mastered it).',
            progress: 5,
        },
        {
            id: 5,
            priority: 'High',
            title: 'Web pages explanation',
            description: '',
            progress: 0,
        },
    ]
    const bugs = [
        {
            id: 0,
            priority: 'Low',
            title: "IndentationError: expected an indented block after function definition",
            description: 'Common mistake: forgetting to indent the code correctly',
            status: 'fixed',
        },
        {
            id: 1,
            priority: 'CRITICAL',
            title: "Pichu's retirement",
            description: "The most critical bug of all time, it can only be fixed by Pichu staying",
            status: "Won't happen",
        },
        {
            id: 2,
            priority: 'Low',
            title: "SyntaxError: '(' was never closed",
            description: 'Common mistake: forgetting to close parentheses',
            status: 'pending',
        },
        {
            id: 3,
            priority: 'Low',
            title: "SyntaxError: expected ':'",
            description: 'Common mistake: forgetting to add a colon when defining an if, for, while, or function',
            status: 'pending',
        },
        {
            id: 4,
            priority: 'Low',
            title: "TypeError: unsupported operand type(s) for +: 'int' and 'str'",
            definition: 'Common mistake: trying to add an integer and a string',
            status: 'fixed',
        },
        {
            id: 5,
            priority: 'Low',
            title: "NameError: name 'name' is not defined",
            definition: 'Common mistake: using a variable that has not been defined yet',
            status: 'fixed',
        },
        {
            id: 6,
            priority: 'Low',
            title: "IndexError: list index out of range",
            definition: 'Common mistake: trying to use an index that does not exist',
            status: 'pending',
        },
    ]

    return (
        <>
            <h1 className="container-title">Issue tracker: tasks and bugs</h1>
            <div className="issues-containers-container">
                <div className="issue-tracker-container">
                    <p className="issue-tracker-p">Features:</p>
                    <div className="issues">

                        {features.map((feature, index) => {
                            return (
                                <div className="issue" key={feature.id}>
                                    <span className="issue-priority">Priority: <span style={{color: feature.priority === 'high' ? 'rgba(244, 205, 205, 1)' : feature.priority === 'Medium' ? 'rgba(243, 230, 197, 1)' : 'rgba(194, 242, 206, 1)'}}>{feature.priority}</span></span>
                                    <h2 className="issue-title">{feature.title}</h2>
                                    <p className="issue-description">{feature.description}</p>
                                    <span className="issue-status">{feature.progress < 10 ? 'pending' : feature.progress == 100 ? 'compleated' : 'in progress'}</span>
                                    <div className="issue-progress" style={{width: '100%'}}>
                                        <div className="issue-progress-bar" style={{width: '120px', height: '8px', backgroundColor: feature.progress < 10 ? 'rgba(244, 205, 205, 1)' : feature.progress > 90 ? 'rgba(194, 242, 206, 1)' : 'rgba(243, 230, 197, 1)', borderRadius: '4px'}}>
                                            <div style={{height: '100%', width:`${feature.progress}%`, backgroundColor: feature.progress < 10 ? 'rgb(255, 0, 0)' : feature.progress > 90 ? 'rgba(0, 239, 60, 1)' : 'rgba(255, 183, 2, 1)', borderRadius: '4px'}}></div>
                                        </div>
                                        <p>{feature.progress}%</p>
                                    </div>
                                    <p className="issue-id">id: #10{feature.id}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="issue-tracker-container">
                    <p className="issue-tracker-p">Bugs:</p>
                    <div className="issues">

                        {bugs.map((bug, index) => {
                            return (
                                <div className="issue" key={bug.id}>
                                    <span className="issue-priority">Priority: <span style={{color: bug.priority === 'CRITICAL' ? 'rgba(244, 205, 205, 1)' : 'rgba(194, 242, 206, 1)'}}>{bug.priority}</span></span>
                                    <h2 className="issue-title">{bug.title}</h2>
                                    <p className="issue-description">{bug.description}</p>
                                    <span className="issue-progress">{bug.status} <div style={{width: '8px', height: '8px', borderRadius: '4px', backgroundColor: bug.status == 'fixed' ? 'rgba(0, 239, 60, 1)' : 'rgba(255, 0, 0, 1)'}}></div></span>
                                    <p className="issue-id">id: #23{bug.id}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}