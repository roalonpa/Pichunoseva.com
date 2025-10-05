import './warning.css'
import { BiSolidError } from "react-icons/bi";

export default function Warning({ setWarning , confetti}) {

    function handleWarning(action) {
        switch (action) {
            case 'retry':
                alert("Retry failed: RetirementException is non-recoverable.\nHint: Try StayWithUs() instead")
                break;
            case 'abort':
                alert("System Notice: By aborting retirement, you risk leaving students in an endless loop of depression.\nProceed with caution.");
                setWarning(false)
                break;
            case 'stay':
                alert("Bug resolved: RetirementException handled successfully.");
                setWarning(false)
                confetti()
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="warning-background">
                <div className="warning-container-outer">
                    <h1 className='warning-title'><BiSolidError size={48}/> WARNING</h1>
                    <div className="warning-container-inner">
                        <span><span style={{ color: 'rgba(204, 0, 255, 1)', fontWeight: 'bold' }}>ProcessTerminatedError:</span> Attempted to execute <span style={{ color: 'deepskyblue' }}>END</span>.</span>
                        <br />
                        <span>Critical bug detected: <span style={{ color: 'rgba(204, 0, 255, 1)' }}>RetirementException</span></span>
                        <br />
                        <span>Status: Non-recoverable</span>
                        <span>Solution: <span style={{ color: 'rgba(255, 204, 0, 1)' }}>Stay</span></span>
                        <span>Suggested Action: <span style={{ color: 'deepskyblue' }}>Abort</span> retirement and <span style={{ color: 'deepskyblue' }}>re-run</span> with StayWithUs()</span>
                    </div>
                    <div className="warning-buttons">
                        <button className='warning-button retry-button' onClick={() => handleWarning('retry')}>RETRY</button>
                        <button className="warning-button abort-button" onClick={() => handleWarning('abort')}>ABORT</button>
                        <button className="warning-button stay-button" onClick={() => handleWarning('stay')}>STAY</button>
                    </div>
                </div>
            </div>
        </>
    )
}