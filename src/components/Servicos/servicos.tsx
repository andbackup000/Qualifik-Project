import { ServiceCard } from "./styles"

interface ServiceProps {
    title:string,
    description:string
}

export const Service = ({title,description}:ServiceProps) => {
    return (
        <ServiceCard>
            <h2>{title}</h2>
            <p>{description}</p>
        </ServiceCard>
    )
}