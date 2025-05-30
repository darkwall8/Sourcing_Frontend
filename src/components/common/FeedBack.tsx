import fillStar from "/icons/fill_star.svg";
import emptyStar from "/icons/empty_star.svg";
import { useTranslation } from "react-i18next";
import InputTextArea from "../ui/InputTextarea";
import { useState } from "react";

function FeedBack() {

    const { t } = useTranslation();
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0);

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="">{ t("dashboard.feedback.advice") }</p>
                <p className="text-gray-400">{ t("dashboard.feedback.describe_your_experience") }</p>
                <div className="text-gray-400 flex items-center justify-between w-full">
                    {Array.from({ length: 5 }, (_, index) => (
                        <img
                        key={index}
                        src={index < rating ? fillStar : emptyStar}
                        alt="star"
                        onClick={() => setRating(index + 1)}
                        className="cursor-pointer"
                        />
                    ))}
                    <p className="text-xs">{ rating }/5 { t("dashboard.feedback.star") }</p>
                </div>
                <div className="text-gray-400 w-full">
                    <p className="">{ t("dashboard.feedback.additional_comment") }</p>
                    <InputTextArea label={""} placeholder={t("dashboard.feedback.comment_placeholder")} value={comment} handleChange={setComment} />
                </div>
                <div className="bg-primary h-10 w-full flex items-center justify-center font-semibold text-white rounded-md">{ t("dashboard.feedback.submit_feedback") }</div>
            </div>
        </div>
    )
}

export default FeedBack;