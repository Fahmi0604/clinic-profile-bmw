export default async function PromoBar({ headline }: { headline: string }) {
    return (
        <div className="bg-gold-secondary py-2">
            {headline && <p className="text-xs md:text-base text-center font-outfit">{headline}</p>}
        </div>
    )
}