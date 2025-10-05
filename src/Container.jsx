import './container.css'

export default function Container({ children, id }) {
    return (
        <div className='container' data-id={id}>
            {children}
        </div>
    )
}