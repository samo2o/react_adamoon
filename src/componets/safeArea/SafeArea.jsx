export default function SafeArea({ Content }) {
    return (
        <div className="pt-[44px] overflow-x-hidden">
            {Content}
        </div>
    );
}