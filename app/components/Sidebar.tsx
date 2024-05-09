import { MdHomeFilled } from "react-icons/md";

export default function Sidebar() {
    return (
        <div className="flex flex-col">
            <div className="section">
                <div className="flex items-center p-4">
                    <div className="icon">
                        <MdHomeFilled size={25} />
                    </div>
                    <div className="text">Home</div>
                </div>
                <div className="home">Shorts</div>
                <div className="home">Subscription</div>
            </div>
            {/* Home Shorts & Subscription */}
            {/* Separator */}
            {/* You - Header */}
            {/* Your channel & History & Playlists & Your videos */}
            {/* Separator */}
            {/* Subscriptions - Header */}
            {/* Separator */}
            {/* Explore - Header */}
            {/* Trending Shorts & Subscription */}
            {/* More From Youtube - Header */}
        </div>
    );
}
