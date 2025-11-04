
interface SectionContainerInterface {
    children: React.ReactNode
}

const SectionContainer = ({children}: SectionContainerInterface) => {
    
    return(
        <div className="w-full items-center justify-center">
            {children}
        </div>
    )
}

export default SectionContainer;