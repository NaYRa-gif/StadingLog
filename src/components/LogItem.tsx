import { Log } from "@/src/types";

interface LogItemProps {
    log: Log;
    onDelete: (id: number) => void;
}

export default function LogItem({ log, onDelete }: LogItemProps) {
    return (
        <div className="flex border-b border-gray-100 pb-4">
            <div>
                <p className="text-gray-800 text-lg">{log.content}</p>
                <p className="text-xs text-gray-400 mt-1">{log.date}</p>
            </div>
            <button
                onClick={() => onDelete(log.id)}
                className="text-white text-sm bg-red-500 px-2 py-1 rounded-lg mt-2 ml-auto hover:bg-red-600 transition"
            >
                削除
            </button>
        </div>
    )
}