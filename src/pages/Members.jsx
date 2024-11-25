import React from "react";
import MemberCard from "../components/MemberCard";
import { useLanguage } from "../LanguageContext";
import members from "../dummy_data_boardmembers.json"; // Import JSON directly
import pfp from "../assets/pfp/default.png"; // Default profile picture

function Members() {
    const { language } = useLanguage();

    const translations = {
        en: {
            board_leadership: "BOARD LEADERSHIP",
            board_members: "BOARD MEMBERS",
        },
        pt: {
            board_leadership: "LIDERANÇA DO CONSELHO",
            board_members: "MEMBROS DO CONSELHO",
        },
    };

    // Separate members into leadership and board groups
    const boardLeadership = members.filter(
        (member) => member.group === "Board Leadership"
    );
    const boardMembers = members.filter((member) => member.group === "Board Members");

    return (
        <div className="max-w-[1200px] flex flex-col mx-auto">
            <h1 className="p-4 pb-0 text-4xl mx-auto">
                {translations[language].board_leadership}
            </h1>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
                {boardLeadership.map((member, index) => (
                    <MemberCard
                        key={index}
                        pfp={member.profilePicture || pfp}
                        name={member.name}
                        position={member.position}
                        desc={member.bio}
                        linkedin={member.links.LinkedIn}
                        email={member.links.Email}
                        instagram={member.links.Instagram}
                    />
                ))}
            </div>
            <h1 className="p-4 py-0 text-4xl mx-auto">
                {translations[language].board_members}
            </h1>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                {boardMembers.map((member, index) => (
                    <MemberCard
                        key={index}
                        pfp={member.profilePicture || pfp}
                        name={member.name}
                        position={member.position}
                        desc={member.bio}
                        linkedin={member.links.LinkedIn}
                        email={member.links.Email}
                        instagram={member.links.Instagram}
                    />
                ))}
            </div>
        </div>
    );
}

export default Members;
