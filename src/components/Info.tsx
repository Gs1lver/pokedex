interface Props {
    segredo?: string,
} 

export default function Info({segredo, children}: React.PropsWithChildren<Props>){

    return (
        <>
        {segredo}
        <p>informações sigilosas 🤫</p>
        {children} {/*slort*/}
        </>
    )
}