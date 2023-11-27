export default function Footer({ terms, policy,year='2023', domain='example.de' }) {
    return (
        <section className="flex flex-row gap-2 w-full items-center justify-center h-[30px] text-black/50">
            <h1 className="text-sm text-center cursor-default">© {year} | {domain}</h1>
        </section>
    );
}