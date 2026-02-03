"use client";
import { useState } from 'react';

interface InputFormProps {
    onAdd: (text: string) => void;
}

export default function InputForm({ onAdd }: InputFormProps) {
    const [inputText, setInputText] = useState<string>("");

    const handleSubmit = () => {
        if (inputText === "") return;
        onAdd(inputText);
        setInputText("");
    }

    return (
        <div className="flex gap-2 mb-8">
            <input
                type="text"
                className="flex-1 border-2 border-gray-200 p-2 rounded-lg text-black focus:outline-none focus:border-blue-500"
                placeholder="今日は何を学んだ？"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
            >
                投稿
            </button>
        </div>
    );
}